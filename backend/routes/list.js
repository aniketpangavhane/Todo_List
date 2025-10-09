const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

// ==========================
// Add Task
// ==========================
router.post("/addTask", async (req, res) => {
  try {
    const { title, body, email } = req.body;

    // Find user by email
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "User not found" });
    }

    // Create new task
    const list = new List({
      title,
      body,
      user: existingUser._id, // store only user ID
    });

    await list.save();

    // Add task ID to user's list array
    existingUser.list.push(list._id);
    await existingUser.save();

    res.status(200).json({ message: "Task added", list });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
});

// ==========================
// Update Task
// ==========================
router.put("/updateTask/:id", async (req, res) => {
  try {
    const { title, body, email } = req.body;

    // Find user by email
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "User not found" });
    }

    // Update the task by ID
    const updatedTask = await List.findByIdAndUpdate(
      req.params.id,
      { title, body },
      { new: true } // return updated document
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task updated", updatedTask });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
});

// ==========================
// Delete Task
// ==========================
router.delete("/deleteTask/:id/:email", async (req, res) => {
  try {
    const { id, email } = req.params;

    // Find user
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "User not found" });
    }

    // Remove task
    const deletedTask = await List.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Remove task ID from user's list array
    existingUser.list = existingUser.list.filter(taskId => taskId.toString() !== id);
    await existingUser.save();

    res.status(200).json({ message: "Task deleted", deletedTask });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
});

// ==========================
// Get All Tasks of a User
// ==========================
router.get("/getTasks/:email", async (req, res) => {
  try {
    const { email } = req.params;

    const existingUser = await User.findOne({ email }).populate("list");
    if (!existingUser) {
      return res.status(400).json({ message: "User not found" });
    }

    res.status(200).json({ tasks: existingUser.list });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
});

module.exports = router;

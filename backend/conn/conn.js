const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://aniketpangavhane3_db_user:Bitcoinan@todolist.opyh2sc.mongodb.net/todoDB");
        console.log("✅ MongoDB connected");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
    }
};


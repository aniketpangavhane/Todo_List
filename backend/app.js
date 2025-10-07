const express = require("express");
const app = express();
const connectDB = require("./conn/conn.js");
connectDB();
const auth =require("./routes/auth");
app.use(express.json());
app.get("/", (req,res) =>{
    res.send("Hello");
});

app.use("/api/v1", auth);

app.listen(1000, () => console.log(" Server started at http://localhost:1000"));

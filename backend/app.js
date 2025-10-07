const express = require("express");
const app = express();
connectDB=require("./conn/conn.js");

app.use(express.json());
app.put("/", (req,res) =>{
    res.send("Hello");
});

const PORT = 1000;
app.listen(PORT, () => {
    console.log(` Server started at http://localhost:${PORT}`);
});


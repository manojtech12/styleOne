
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect AI route
app.use("/api/ai", require("./ai.JS"));

app.get("/", (req, res) => {
    res.send("StyleOne AI Server Running");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

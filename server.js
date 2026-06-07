const express = require("express");
require("dotenv").config();

const githubRoutes = require("./routes/githubRoutes");

const app = express();

app.use(express.json());


// Root Route

app.get("/", (req, res) => {
    res.send("GitHub Profile Analyzer API is Running");
});


// GitHub Routes

app.use("/api/github", githubRoutes);


// Server Start

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`);
});
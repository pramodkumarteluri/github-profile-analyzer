const express = require("express");
const cors = require("cors");
require("dotenv").config()

const githubRoutes = require("./routes/githubRoutes.js");

const app = express();

app.use(express.json());

app.use("/api/github",githubRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`);
})
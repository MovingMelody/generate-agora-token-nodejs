// require("dotenv").config();
const dotenv = require('dotenv');
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const { generateToken } = require("./controllers/token");
// middlewares
app.use(express.json());
app.use(cors())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get("/getToken/:channelId", generateToken);

// port
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

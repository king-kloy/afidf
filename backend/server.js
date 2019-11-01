const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

// call express
const app = express();
app.use(express.json()); // middleware to use body parser json object
app.use(cors());

const port = 5000 || process.env.PORT;

// import users routes
const usersRoute = require("./routes/users");

// middleware
app.use("/account", usersRoute);

// routes
app.get("/", (req, res) => {
  res.send("home page");
});

// use frontend/build when in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  })
}

// connect to db
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log("Connected to DB");
});

app.listen(port);
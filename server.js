const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Load env vars
dotenv.config({path: "./config/config.env"});

const environment = process.env.NODE_ENV || "development";

// const db = require("./config/db");

// // Connect to database
// db.authenticate().then(() => {
//   console.log("Connection has been established successfully.");
// }).catch(() => {
//   console.error("Unable to connect to the database:", error);
// });

// Route files
const todoRoute = require("./routes/todo.route");

const app = express();

// Body parser

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Enable CORS
app.use(cors());

// Base path
const basePath = "/api/v1";

// Mount routers
app.use(basePath + "/todo", todoRoute);


app.get("*", function (req, res) {
  res.status(404).json({success: false, message: "Request not found"});
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${environment} mode on port ${PORT}`));

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  // server.close(() => process.exit(1));
});

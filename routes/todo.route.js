const express = require("express");
const { getTodos, getTodoById } = require("../controllers/todo.controller");

const router = express.Router();

// @desc      Get all todos
// @route     POST /api/v1/todo
// @access    Public
router.get("/", getTodos);

// @desc      Get todo by id
// @route     POST /api/v1/todo/1
// @access    Public
router.get("/:id", getTodoById);

module.exports = router;

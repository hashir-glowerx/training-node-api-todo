const express = require("express");
const {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controller");

const router = express.Router();

// @desc      Get all todos
// @route     GET /api/v1/todo
// @access    Public
router.get("/", getTodos);

// @desc      Get todo by id
// @route     GET /api/v1/todo/1
// @access    Public
router.get("/:id", getTodoById);

// @desc      Create todo
// @route     POST /api/v1/todo
// @access    Public
router.post("", createTodo);

// @desc      Update todo
// @route     PUT /api/v1/todo/1
// @access    Public
router.put("/:id", updateTodo);

// @desc      Update todo
// @route     PUT /api/v1/todo/1
// @access    Public
router.delete("/:id", deleteTodo);

module.exports = router;

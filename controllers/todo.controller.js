const todoService = require("../service/todo.service");

const getTodos = async (req, res) => {
  const response = await todoService.getAll();
  if (!response.success) res.status(400).json(response);
  res.status(200).json(response);
};

const getTodoById = async (req, res) => {
  const id = req.params.id;

  if (!id) res.status(400).json({ success: false, message: "Invalid id" });

  const response = await todoService.getOne(id);
  if (!response.success) res.status(400).json(response);
  res.status(200).json(response);
};
const createTodo = async (req, res, next) => {
  const { title } = req.body;
  if (!title)
    return res
      .status(400)
      .json({ success: false, message: "Title is required." });
  const response = await todoService.create({ title });
  if (!response.success) return res.status(400).json(response);
  res.status(200).json(response);
};
const updateTodo = async (req, res, next) => {
  const { title } = req.body;
  const { id } = req.params;

  if (!title)
    return res
      .status(400)
      .json({ success: false, message: "Title is required." });
  const response = await todoService.update(id, { title });
  if (!response.success) return res.status(400).json(response);
  res.status(200).json(response);
};
const deleteTodo = async (req, res, next) => {
  const { id } = req.params;
  const response = await todoService.remove(id);
  if (!response.success) return res.status(400).json(response);
  res.status(200).json(response);
};
module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};

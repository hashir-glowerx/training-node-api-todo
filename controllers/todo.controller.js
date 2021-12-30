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

module.exports = {
  getTodos,
  getTodoById,
};

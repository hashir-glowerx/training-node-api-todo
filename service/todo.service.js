const TodoSchema = require("../schema/todo-schema");
const moment = require("moment");

const data = [
  { id: "1", title: "First todo!" },
  { id: "2", title: "Second todo!" },
  { id: "3", title: "Third todo!" },
];

// Function to get all todos from the database
const getAll = async () => {
  return { success: true, message: "Success", data: data };
};

// Function to get a todo by id from the database
const getOne = async (id) => {
  const filterdData = data.filter((item) => id === item.id)[0];
  return { success: true, message: "Success", data: filterdData };
};

// Function to create a todo in database
const create = async () => {};

// Function to update a todo by id in database
const update = async () => {};

// Function to delete a todo by id from database
const remove = async (id) => {};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
};

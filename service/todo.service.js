const TodoSchema = require("../schema/todo-schema");
const moment = require("moment");

// Function to get all todos from the database
const getAll = async () => {
  try {
    const todo = await TodoSchema.findAll();
    return { success: true, data: todo };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Function to get a todo by id from the database
const getOne = async (id) => {
  try {
    const todo = await TodoSchema.findOne({
      where: {
        id,
      },
    });
    if (!todo) {
      return { success: false, data: null };
    }
    return { success: true, data: todo };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Function to create a todo in database
const create = async (data) => {
  try {
    const todo = await TodoSchema.create(data);
    return { success: true, data: todo };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Function to update a todo by id in database
const update = async (id, data) => {
  try {
    const todo = await TodoSchema.findOne({
      where: {
        id,
      },
    });
    if (!todo) {
      return { success: false, data: null };
    }
    todo.update(data);
    return { success: true, data: todo };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Function to delete a todo by id from database
const remove = async (id) => {
  try {
    const todo = await TodoSchema.findOne({
      where: {
        id,
      },
    });
    if (!todo) {
      return { success: false, data: null };
    }
    todo.destroy();
    return { success: true, data: todo };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
};

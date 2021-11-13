const express = require("express");

const router = express.Router();

// Controller
const {
  addTodo,
  doneTodo,
  getTodos,
  deleteTodo,
} = require("../controllers/todo");

// Route
router.get("/todos", getTodos);
router.post("/todo", addTodo);
router.patch("/todo/:id", doneTodo);
router.delete("/todo/:id", deleteTodo);

module.exports = router;

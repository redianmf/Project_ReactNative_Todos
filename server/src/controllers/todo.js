const { todotable } = require("../../models");

exports.addTodo = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      isDone: "false",
    };

    const todoData = await todotable.create(data);

    res.send({
      status: "success",
      data: todoData,
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.doneTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const data = {
      isDone: "true",
    };

    const todoData = await todotable.update(data, {
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      data: todoData,
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getTodos = async (req, res) => {
  try {
    const todosData = await todotable.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      order: [["createdAt", "DESC"]],
    });

    res.send({
      status: "success",
      data: todosData,
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    await todotable.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      id,
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

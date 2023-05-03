const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  postTasks,
} = require("../controller/tasks");

router.route("/").get(getAllTasks).post(postTasks);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;

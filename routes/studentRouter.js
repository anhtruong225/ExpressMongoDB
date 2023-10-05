import express from "express";
import * as studentController from "../controllers/students.js";

const studentRouter = express.Router();

studentRouter
  .route("/")
  .get(studentController.getAllStudents)
  .post(studentController.addNewStudent);

studentRouter.route("/:id").get(studentController.getStudentById);

export default studentRouter;

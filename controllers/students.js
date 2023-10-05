import Student from "../models/Student.js";

export const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find();
    if (!students.length) {
      throw { statusCode: 404, message: "student not found" };
    }
    res.json(students);
  } catch (error) {
    next(error);
  }
};
export const getStudentById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    if (!student) {
      throw { statusCode: 404, message: "student not found" };
    }
    res.send(student);
  } catch (error) {
    next(error);
  }
};

export const addNewStudent = async (req, res, next) => {
  try {
    const { name, first_name, email } = req.body;
    const newStudent = await Student.create({
      name,
      first_name,
      email,
    });
    res.status(201).json(newStudent);
  } catch (error) {
    next(error);
  }
};

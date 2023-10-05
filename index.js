import express from "express";
import "./db/server.js";
import { errorHandler } from "./middleware/errorHandler.js";
import studentRouter from "./routes/studentRouter.js";

const app = express();
const port = 8000;

app.use(express.json());
app.use("/students", studentRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

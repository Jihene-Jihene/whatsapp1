import express from "express";
import { connection } from "./config/db";
import { userController } from "./routes/user.routes.js";
import cors from "cors";
import { json, urlencoded } from "express";
const app = express();
app.use(cors());
app.use(json({ extended: true }));
app.use(urlencoded({ extended: true }));
app.use("/", userController);

const PORT = 8080;

connection
  .then(() => {
    app.listen(PORT, () => {
      console.log("Connected to db");
      console.log(`listening on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to DB");
    console.log(err);
  });

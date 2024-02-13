import express from "express";
import dotenv from "dotenv";
import { connect } from "./Config/mongoDBConfig.js";
import cors from "cors";
import homeRouter from "./Routes/urlRouter.js";

dotenv.config();
const app = express();

const corsOptions = {
  origin: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(express.static("Public"));

app.use("/api/home", homeRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  connect();
  console.log(`Backend server started sucessfully, http://localhost:${port}`);
});

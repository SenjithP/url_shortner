import express from "express";
import { shortenUrl,getUrl } from "../Controllers/urlController.js";
const homeRouter = express.Router();

   
homeRouter.post("/shotenUrl",shortenUrl)
homeRouter.get("/getUrl",getUrl)

export default homeRouter;
  
import express from "express";
import { newConversation, getConversation } from "../Controller/conversation";
import { uploadImage, getImage } from "../Controller/image_controller";
import { newMessage, getMessages } from "../Controller/message_controller";
import { addUser, getUser } from "../Controller/user_controller";
import upload from "../Utils/upload.js";
const userController = express.Router();

// const {addUser} = require("../Controller/user_controller.js")

userController.post("/add", addUser);
userController.get("/user", getUser);
userController.post("/conversation/add", newConversation);
userController.post("/conversation/get", getConversation);
userController.post("/message/add", newMessage);
userController.get("/message/get/:id", getMessages);
userController.post("/file/upload", upload.single("file"), uploadImage);
userController.get("/file/:filename", getImage);

export { userController };

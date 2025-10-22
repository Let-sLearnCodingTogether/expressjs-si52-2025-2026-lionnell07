import express from "express";
import * as authController from "../controller/authController.js";
import * as profilecontroller from "../controller/profilecontroller.js"
import { protect } from "../middleware/authMiddleware.js";

const api = express.Router()

api.post("/register",authController.register); 

api.post("/login",authController.login); 

api.get("/me",protect,profilecontroller.privateProfile);

export default api
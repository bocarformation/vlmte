import express from "express"
import { GetAllUsers, Login, Register } from "../controllers/c_user.js";


const userRouter = express.Router();


userRouter.post("/login", Login)

userRouter.post("/register", Register)

userRouter.get("/users", GetAllUsers)

export default userRouter
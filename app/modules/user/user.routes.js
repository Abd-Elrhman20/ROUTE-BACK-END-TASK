import { Router } from "express";
import { signIn, signUp } from "./user.controllers.js";
import { signUpSchema, validate } from "./Middlewares/validate.middleware.js";
import { checkExistEmail } from './Middlewares/user.middlewares.js';

const userRouter = Router()

userRouter.post("/login", signIn)
userRouter.post("/register", [validate(signUpSchema), checkExistEmail], signUp)
// special
// userRouter.post("/special", getUserWithHisCategoriesAndTasks)

export default userRouter
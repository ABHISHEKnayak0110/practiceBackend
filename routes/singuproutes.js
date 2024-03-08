import { Router } from "express";

import {signUp ,logIn} from "../controllers/register.js"
const routes = Router()

routes.post("/signUp" , signUp)
routes.post("/login", logIn)

export default routes
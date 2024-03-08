import { Router } from "express";
import signRoutes from "./singuproutes.js"
import routes from "./accounts.js";
import validation from "../middlewares/validation.js";

 const route = Router()
 route.use("/user" , signRoutes)
 route.use("/account" ,validation, routes)
 route.get('/' , (req , res) => {
    res.send("<h1>hello</h1>")
})

export default route
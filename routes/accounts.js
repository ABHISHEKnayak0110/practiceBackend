import { Router } from "express";
import { createUserDetails,
    deleteUserDetails,
    updateUserDetails,
    getAllUser,
    getUserDetails} from "../controllers/account.js"

const routes = Router()

routes.get("/user" , getAllUser)
routes.post("/user" , createUserDetails)
routes.get("/user/:id" ,getUserDetails
)
routes.delete("/user/:id" , deleteUserDetails
)
routes.patch("/user/:id" ,updateUserDetails
)

export default routes
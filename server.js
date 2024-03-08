import express from "express";
import route from "./routes/routes.js";
import dbConnection from "./config/dbConnection.js";
const app = express()
dbConnection()

app.use(express.json())
const port = 1290
app.use("/api", route)

app.listen(port , () => {
   console.log("server started" , port)
}
)
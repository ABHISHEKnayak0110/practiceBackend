
import accountModel  from "../models/account.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const signUp = async (req , res ) => {
  try {
    const {username , email , password} = req.body
    console.log(req.body)
    if(!username || !email || !password){
     res.status(400).json({
     error : "Please Provide all fields"
     })
  }
  
  const hasPassword = await  bcrypt.hash(password , 10)
  const data = await accountModel.create({...req.body , password : hasPassword})
  console.log("gg" , data , )
  if(data){
    res.status(201).json({
     id : data._id
    })
  }
  else{
    res.status(400)
    throw new Error("User data is not valid ")
  }
  } catch (error) {
    console.log(error )
    res.end()
  }

}

const logIn = async (req , res) => {
   try {
    const {email , password} = req.body
    if(!email || !password){
        res.status(400).json({error : "Pls Provide Email and Password"})
    }
    const user = await accountModel.findOne({email})
    if(!user){
        res.status(404).json({
            error : "User Not Exist !"
        })
    }
    if(user && (await bcrypt.compare(password , user.password))){
    
        const accessToken = jwt.sign({
            user : {
                accountId : user._id, 
                username : user.username,
                email : user.email
            }
        } , "Abhi@123" ,{ expiresIn : "10m"})

        res.status(200).json({accessToken})
    }


    
   } catch (error) {
      console.log(error)
      res.status(501).end()
   }
    
}
export{
    signUp, logIn
}

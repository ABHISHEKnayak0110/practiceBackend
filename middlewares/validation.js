import jwt from "jsonwebtoken"

const validation  = async(req , res , next) => {
    let authHeader = req.headers.Authorization || req.headers.authorization 
   
    if(authHeader && authHeader.startsWith("Bearer")){
        const accessToken = authHeader.split(" ")?.[1]
        
        jwt.verify(accessToken , "Abhi@123" , (err , data ) => {
           if(err){
            console.log("err" , err)
            res.status(401).json({
                error : "User unAuthorised"
            })
            return
           }
           console.log(data)
           req.user = data?.user
           next()
         
        }) 
    }
    else{
        console.log(req)
        res.status(401).json({
            error : "User unAuthorised"
        })
    }
}
export default validation
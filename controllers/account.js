import details from "../models/details.js";

const createUserDetails = async(req , res) => {
  try {
     const {username ,data } = req.body
     if(!username || !data){
        res.status(400).json({erro : "Please Provide Data"})
     }
     console.log("details" , req.body)
     const detailsCreated =  await details.create(
        {
            ...req.body,
            accountId : req.user?.accountId
        }
     )
     if(detailsCreated){
        res.status(201).json({
           "message" : "Craeted"
        })
     }
  } catch (error) {
    
  }

    
}
const getUserDetails =async (req, res) => {
    try {
        
        const id = req.params.id
        console.log(id)
        if(id){
            const data = await details.findById({_id : id})
            if(data){
                res.status(200).json({data : data})
            }
            else{
                res.status(404).end()
            }
        }
    } catch (error) {
          res.status(501).end()
    }
  

}
const getAllUser = async(req , res) => {
try {

       const contacts = await details.find({accountId : req.accountId})
      res.status(200).json(contacts);
} catch (error) {
    res.status(501).end()
}
}

const updateUserDetails =async(req, res ) => {
   try {
    console.log("id" , req.params.id)
    const contact = await details.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Record not found") 
    }
    if(contact.accountId.toString() !== req.user.accountId){
      res.status(404)
      throw new Error("user MisMatch") 
    }
    const updatedData = await details.findByIdAndUpdate(req.params.id , req.body )
  res.status(200).json(updatedData);
   } catch (error) {
    console.error(error)
        res.status(404).end()
   }
}


const deleteUserDetails =async(req , res) => {
    try {
        const contact = await details.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Record not found") 
    }
    if(contact.accountId.toString() !== req.user.accountId){
      res.status(404)
      throw new Error("user MisMatch") 
    }
    const deletedData = await details.findByIdAndDelete(req.params.id)
  res.status(200).json(deletedData );
    } catch (error) {
        console.error(error)
        res.status(404).end()
    }
    
}

export {
    createUserDetails,
    deleteUserDetails,
    updateUserDetails,
    getAllUser,
    getUserDetails
}
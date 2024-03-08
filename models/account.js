import mongoose, {Schema , model } from "mongoose";

const accountModal = new Schema({
    username : {
        type:String,
        required: [true , "Please Provide User Name"]
    },
    email : {
        type:String,
        required: [true , "Please Provide Email"],
        unique :[true , "Email already exist"]
    },
    password : {
        type:String,
        required: [true , "Please Provide Password"]
    }

},{
    timestamps: true
}
)

const modal = model("accounts" , accountModal)
export default modal
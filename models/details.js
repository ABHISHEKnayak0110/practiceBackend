import mongoose, { Schema } from "mongoose";

const detailsSchema = new Schema({
    username : {
        type : String

    },
    accountId : {
        type : mongoose.Schema.ObjectId,
        ref : "accounts"

    },
    data : {
        type : Array
    }
},{
    timestamps : true
}
)
 const DetailModal = mongoose.model("details" , detailsSchema)
 export default DetailModal
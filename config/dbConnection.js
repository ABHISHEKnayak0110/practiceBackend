import mongoose from "mongoose";

async function dbConnection(){
 try {
    const connect = await mongoose.connect(`mongodb+srv://AbhishekNayak:Abhi8319443225@abhishekcluster.slmgkpr.mongodb.net/practice?retryWrites=true&w=majority`)
    console.log("data Base connected ")
    
 } catch (error) {
     console.log(error)
     process.exit(1)
 }
}
export default dbConnection
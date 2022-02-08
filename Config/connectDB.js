//requite mongoose
const mongoose=require("mongoose");
//Connected with DataBase

const connectDB = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/checkpoint_mongoose')
        console.log("data base in connected ..");
    } catch (error) {

        console.log("data can not connecting !!!");
    }
}
module.exports = connectDB
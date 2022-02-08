//require express
const express=require("express")
const app=express()

//required configure
require('dotenv').config()

// connect to Database
const connectDB = require("./Config/connectDB")
connectDB()

// body Parser Middelware
app.use(express.json())

//require route
const router=require('./Routes/contact')
app.use('/api/contacts/',router)

// port
const port=process.env.PORT 

//connecting in server

app.listen(port,error=>{
error ? console.log("can not connecting a server")
: console.log(`server is running ${port}...` )
})


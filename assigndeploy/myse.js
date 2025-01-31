const app = require("./app")
const env= require("dotenv")
const path=require('path')
console.log("Hello");

//const port=8050

env.config({path:'./utility/config.env'})
console.log(process.env.PORT);

app.listen(process.env.PORT,()=>{
    console.log(`server is running`)
})
const express = require("express")
const empRouter= require('./routes/employeesRoute')
//const fs = require("fs")

const app = express()
app.use(express.json())
//const port=8005
//const FILEPATH = "./MOCK_DATA.json"
//const controller=require('./controlller/apihandler')
//const controller=require('./controlller/apihandler')



app.use("/api/v1/",empRouter)
app.use(express.static(`${__dirname}/public`))
// app.listen(port,()=>{
//     console.log(`server started ${port}`)
// })

app.use("/api/v1/",empRouter)
module.exports =app;
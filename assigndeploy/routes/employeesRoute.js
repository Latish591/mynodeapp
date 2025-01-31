//const express= require('express')
const express=require('express')
const controller =require('../controlller/apihandler')
const router=express.Router()

router.route("/getemployee")
    .get(controller.getAllEmployee)

router.route("/addemployee")
    .post(controller.addEmployee)
   
module.exports=router
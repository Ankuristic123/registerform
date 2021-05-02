const express=require('expreess')
const router=express.Router()
const LoginTemplateCopy =require('../models/Login')
const bcrypt=require('bcrypt')
const { request, response } = require('express')

router.post('/Login',async(req,res)=>{
    const SaltPassword=await bcrypt.genSalt(10)
    const securePassword=await bcrypt.hash(request.body.password,saltPassword)
    const SaltPassword=await bcrypt.genSalt(10)
    const LoginUpUser=new LoginUpTemplateCopyCopy({

        
        email:request.body.email,
        password:request.body.password,
        
    })

    LoginUpUser.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })
})

router.get("/LoginUp")

module.exports=router
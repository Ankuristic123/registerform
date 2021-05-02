const express=require('expreess')
const router=express.Router()
const SignUpTemplateCopy =require('../models/Signup')
const bcrypt=require('bcrypt')
const { request, response } = require('express')

router.post('/signUp',async(req,res)=>{
    const SaltPassword=await bcrypt.genSalt(10)
    const securePassword=await bcrypt.hash(request.body.password,saltPassword)
    const SaltPassword=await bcrypt.genSalt(10)
    const SignedUpUser=new SignUpTemplateCopyCopy({

        firstname:request.body.firstname,
        lastname:request.body.lastname,
        email:request.body.email,
        password:request.body.password,
        confirmpassword:request.body.confirmpassword,
        contactnumber:request.body.contactnumber
    })

    SignedUpUser.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })
})

router.get("/signUp")

module.exports=router
const express=require('expreess')
const router=express.Router()
const FAQTemplateCopy =require('../models/FAQ')
const { request, response } = require('express')

router.post('/FAQ',(req,res)=>{
    const FAQUpUser=new FAQTemplateCopyCopy({

        question:request.body.question,
        answer:request.body.answer,
      
    })

    FAQUser.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })
})

router.get("/FAQ")

module.exports=router
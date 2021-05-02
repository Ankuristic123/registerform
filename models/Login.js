const mongoose= require('mongoose')

const LoginSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50
    },
    Password:{
        type:String,
        required:true,
        minlength:5,
        maxlength:1024
    },
    data:{
        type:Date,
        default:Date.now
    }
})

module.export=mongoose.model('myTable',LoginSchema)
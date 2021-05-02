const mongoose=require('mongoose');

const SignUpTemplate=newmongoose.Schema({

    firstname: {
        type:String,
        required:true
    },
    lastname:{
        type:String,
        requitrd:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('myTable',SignUpTemplate)
const mongoose =require('mongoose')

const FAQTemplate= newmongoose.schema({

    Question:{
        type:String,
        required:true
    },

    Answer:{
        type:String,
        required:true
    },
})

module.exports=mongoose.model('myTable',FAQTemplate)
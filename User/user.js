const mongoose=require("mongoose")

const User= new mongoose.Schema({
    email:String,
    password:{
        type:String,
        validate:{
            validator:function(v){
                return v.length>=8
            }
        }
    }
})

module.exports=User;
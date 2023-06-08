const mongoose=require("mongoose");

const Music= new mongoose.Schema({
    nome:String,
    artistas:String,
    álbum:String,
    anodelancamento:Number

})

module.exports=Music;


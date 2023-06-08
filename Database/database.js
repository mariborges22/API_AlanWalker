const mongoose=require("mongoose")
const mongodb=require("mongodb")
const config=require("../config.json")
const user=config.user;
const pass=config.pass;

mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.s5ne1sv.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    console.log("Eba")
}).catch(err=>{
    console.log(err)
})

module.exports=mongoose;
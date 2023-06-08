const express=require("express");
const app=express();
const port=1234
const mongoose=require("./Database/database");
const User=require("./User/user");

app.get("/", (req,res)=>{
    res.send("Bem-vindo ao sistema de votação do melhor dj do mundo!")
})

app.post("/auth", (req,res)=>{
    var {email,password}=req.body;
    if(email!=undefined){

    }else{
        res.status(400).send("Email enviado é inválido")
    }

})

app.listen(port,()=>{
    console.log(`server ativo na ${port}`)
})
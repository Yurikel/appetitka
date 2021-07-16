const router = require("express").Router();
const Agents = require("../db/models/agent.model")


router.post("/reg", async(req, res)=>{
    const itn = req.body.itn;
    const isUser = await Agents.findOne({"itn":itn})
    if (isUser){
        res.send(409).json({message:"Пользователь с таким ИНН уже зарегистрирован"})
    }else{
        const newUser = new Agents({
            "title":req.body.title, 
            "itn":itn, 
            "password":req.body.password
        });
        await newUser.save()
        res.status(201).json({accept:true})
    }
    
})







module.exports = router;
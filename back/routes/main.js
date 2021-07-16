const router = require("express").Router();
const Agents = require("../db/models/agent.model");
const Goods = require("../db/models/good.model");



router.post("/login", async(req, res)=>{
    itn = req.body.itn;
    password = req.body.password;
    let findUser = await  Agents.findOne({"itn":itn})
    if (findUser){
        if (findUser.password == password){
            res.status(202).json({"itn":findUser.itn, "title":findUser.title})
        }else{
            res.status(401).json({message:"Неверный пароль"})
        }
    }else {
        res.status(401).json({message:"Пользователь с указанным ИНН не зарегистрирован.\n Проверьте правильность ввода ИНН"})
    }
})






module.exports = router;
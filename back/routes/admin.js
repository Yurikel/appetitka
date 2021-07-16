const router = require("express").Router();
const Agents = require("../db/models/agent.model");
const Good = require("../db/models/good.model");


router.get("/goodslist", async (req, res) => {
  const goods = await Good.find({});
  res.status(200).json({ goods });
});



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
        req.session.user = newUser
        res.status(201).json({title: req.body.title, itn: itn})
    }
    
})








module.exports = router;

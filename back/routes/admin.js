const router = require("express").Router();
const Agents = require("../db/models/agent.model");
const Good = require("../db/models/good.model");
const Applications = require("../db/models/application.model")


router.get("/goodslist", async (req, res) => {
    const goods = await Good.find({});
    res.status(200).json({ goods });
});
router.get("/applications", async (req, res) => {
    const applications = await Applications.find({});
    res.status(200).json({ applications });
});
router.put("/application/:id", async (req, res) => {
    await Applications.findOneAndUpdate({regnumber:req.params.id}, { $set: {isready: "Готовится к отгрузке"}});
    res.status(200).json({ message: `Заявка № ${req.params.id} отправлена на склад`});
});
router.get("/agents", async (req, res) => {
    const agents = await Agents.find({});
    res.status(200).json({agents});
});

router.post("/reg", async (req, res) => {
    const itn = req.body.itn;
    const isUser = await Agents.findOne({ "itn": itn })
    if (isUser) {
        res.send(409).json({ message: "Пользователь с таким ИНН уже зарегистрирован" })
    } else {
        const newUser = new Agents({
            "title": req.body.title,
            "itn": itn,
            "password": req.body.password
        });
        await newUser.save()
        req.session.user = newUser
        res.status(201).json({ title: req.body.title, itn: itn })
    }

})








module.exports = router;

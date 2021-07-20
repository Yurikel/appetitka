const router = require("express").Router();
const Applications = require("../db/models/application.model");
const Goods = require("../db/models/good.model");
const Agents = require("../db/models/agent.model");

let number = 1;

router.get("/profile/:id", async (req, res) => {
  const login = req.params.id;
  const buyerID = await Agents.findOne({ login });
  const applications = await Applications.find({ buyer: buyerID._id })
  console.log(applications);
  res.status(200).json({ applications });
});

router.post("/cart/:id", async (req, res) => {
  const login = req.params.id;
  const agent = await Agents.findOne({ login: login });
  // console.log(req.body.goods);
  const current_application = new Applications({
    goods: req.body.goods,
    buyer: agent._id,
    regnumber: number,
    date: new Date(),
  });
  number += 1;
  await current_application.save();
  res.status(201).json({ message: "Заявка отправлена на обработку" });
});

router.get("/goods", async (req, res) => {
  const goods = await Goods.find().sort({ title: 1 });
  res.status(200).json(goods);
});

router.get('/getUserInfo', (req, res) => {
  const user = req.session.user;
  if (user) {
    res.json(user.login);
  }
  else res.end();
});






module.exports = router;

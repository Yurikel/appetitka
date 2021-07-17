const router = require("express").Router();
const Admin = require("../db/models/admin.model");
const Agents = require("../db/models/agent.model");
const Goods = require("../db/models/good.model");

router.post("/login", async (req, res) => {
  itn = req.body.itn;
  password = req.body.password;
  let admin = await Admin.findOne({ login: itn });
  if (admin) {
    if (admin.password === password) {
      res.json({ admin: itn });
    }
  } else {
    let findUser = await Agents.findOne({ itn: itn });
    if (findUser) {
      if (findUser.password == password) {
        req.session.user = findUser;
        res.status(202).json({ itn: findUser.itn, title: findUser.title });
      } else {
        res.status(401).json({ message: "Неверный пароль" });
      }
    } else {
      res
        .status(401)
        .json({
          message:
            "Пользователь с указанным ИНН не зарегистрирован.\n Проверьте правильность ввода ИНН",
        });
    }
  }
});

module.exports = router;

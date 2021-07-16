const Good = require("./models/good.model");
const Admin = require("./models/admin.model");
const Agent = require("./models/agent.model");
const mongoose = require("mongoose");
const { dbUrl, options } = require("./config");

async function seedDatabase() {
  await mongoose.connect(dbUrl, options);

  const adminsToSeed = [
    {
      login: "Anton",
      password: "123",
    },
  ];

  const agentsToSeed = [
    {
      title: 'ООО "Солнышко"',
      itn: 49037285411,
      password: "123",
    },
    {
      title: 'ООО "Ромашка"',
      itn: 37290571048,
      password: "123",
    },
  ];

  const goodsToSeed = [
    {
      title: "Брюква рубленная, в собственном соку",
      price: 124.5,
      stock: 4500,
    },
    {
      title: "Хрен горький, фаршированный",
      price: 33.8,
      stock: 340,
    },
    {
      title: "Редька на пару (в вакуумной упаковке)",
      price: 67.15,
      stock: 75,
    },
    {
      title: "Капуста скуксившаяся, слезливая",
      price: 39.4,
      stock: 11,
    },
    {
      title: "Корнишон, приправленный чрезмерными амбициями",
      price: 258.0,
      stock: 0,
    },
    {
      title: "Репа подзапрелая, с прошлой распродажи",
      price: 11.4,
      stock: 19,
    },
    {
      title: "Свекла кружочками, без глютена и ГМО",
      price: 46.9,
      stock: 89,
    },
  ];

  await Good.insertMany(goodsToSeed);
  await Admin.insertMany(adminsToSeed);
  await Agent.insertMany(agentsToSeed);
  await mongoose.disconnect();
}

seedDatabase();

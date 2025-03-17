// const mongoose = require('mongoose');

// mongoose.connection.on("open", () => console.log("DB connected"));

// async function connectDb({ host, port, dbName}) {
//     const uri = `mongodb://${host}:${port}/${dbName}`;
//     await mongoose.connect(uri, {useNewUrlParser: true});
// }

// module.exports = connectDb;

require("dotenv").config();
const mongoose = require("mongoose");

const connectDb = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("Já conectado ao MongoDB Atlas 🚀");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado ao MongoDB Atlas 🚀");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB Atlas:", error);
    process.exit(1);
  }
};

const MONGO_URI = "mongodb+srv://patiaraldi:blinki%40182@cururudb.nlxw8.mongodb.net/cururudb";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Conectado ao MongoDB Atlas 🚀"))
.catch(err => console.error("Erro ao conectar ao MongoDB Atlas:", err));


module.exports = connectDb;

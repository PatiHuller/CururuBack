// require("dotenv").config();
// const app = require('./app');
// const connectDb = require('./db/mongodb');

// const { appConfig, dbConfig } = require('./config');

// async function initApp(appConfig, dbConfig){
//     try{
//         await connectDb(dbConfig)
//         app.listen(appConfig.port, ()=> console.log(`listen on ${appConfig.port}`))

//     }
//     catch (e){console.error(e)
//         process.exit(0)
//     }
// }

// initApp(appConfig, dbConfig)

require("dotenv").config();
const mongoose = require('mongoose');

// Verifique se a string de conexão está sendo carregada corretamente
console.log("MONGO_URI:", process.env.MONGO_URI);

// Conexão com MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Conectado ao MongoDB Atlas 🚀"))
.catch(err => {
  console.error("Erro ao conectar ao MongoDB Atlas:", err);
  process.exit(1); // Se der erro, finaliza o processo
});

const app = require('./app');
const { appConfig } = require('./config');

// Inicia o servidor Express após a conexão com o MongoDB
app.listen(appConfig.port, () => {
  console.log(`Servidor rodando na porta ${appConfig.port}`);
});

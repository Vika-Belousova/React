import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv'
import sequelize from './config/database.js';
import router from './routes/index.js'
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use('/', router)
app.use(express.json());
const start = async () => {
try{
  await sequelize.authenticate();
  await sequelize.sync();
  app.listen(PORT, () => console.log(`Сервер зпаущен на порте ${PORT}`));
}catch(e){
  console.log(e)
}
}

start();
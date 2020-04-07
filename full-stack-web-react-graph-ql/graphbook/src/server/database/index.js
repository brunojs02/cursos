import { Sequelize } from "sequelize";
import models from "../models";
import configFile from "../config";

const env = process.env.NODE_ENV || "development";
const config = configFile[env];

const sequelize = new Sequelize({
  dialect: config.dialect,
  storage: config.storage,
});

const db = {
  models: sequelize(models),
  sequelize,
};

export default db;

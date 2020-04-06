import { Sequelize } from "sequelize";
import configFile from "../config";

const env = process.env.NODE_ENV || "development";
const config = configFile[env];

const sequelize = new Sequelize({
  dialect: config.dialect,
  storage: config.storage,
});

export default sequelize;

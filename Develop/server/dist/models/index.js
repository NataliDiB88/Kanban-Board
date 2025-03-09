import { Sequelize } from 'sequelize';
import { UserFactory } from './user';
import dotenv from 'dotenv';
dotenv.config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false,
});
const models = {
    User: UserFactory(sequelize),
};
export { sequelize };
export default models;

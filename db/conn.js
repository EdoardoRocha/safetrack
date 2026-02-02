import { Sequelize } from "sequelize";

const dbpassword = process.env.DB_PASSWORD;
const dbname = process.env.DB_NAME;
const dbuser = process.env.DB_USER;
const dbhost = process.env.DB_HOST;

const sequelize = new Sequelize(dbname, dbuser, dbpassword, {
    host: dbhost,
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log("Conexão estabelecida com sucesso ao banco de dados!");
} catch (error) {
    throw new Error("Impossível se conectar ao banco de dados. [LOGERROR]: " + error);
}

export default sequelize;
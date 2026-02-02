import { DataTypes } from "sequelize";
import db from "../db/conn.js";
import Equipment from "./Equipment.js";

const Maintenance = db.define('Maintenance', {
    service_description: {
        type: DataTypes.TEXT
    },
    technical: {
        type: DataTypes.STRING
    }
})

Maintenance.belongsTo(Equipment);
Equipment.hasMany(Maintenance);

export default Maintenance;
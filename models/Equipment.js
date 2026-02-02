import { DataTypes } from "sequelize";
import db from "../db/conn.js";

const Equipment = db.define('Equipment', {
    name: {
        type: DataTypes.STRING,
        require: true
    },
    category: {
        type: DataTypes.STRING
    },
    last_revision_date: {
        type: DataTypes.STRING,
        require: true
    },
    next_revision_date: {
        type: DataTypes.STRING,
        require: true
    },
    day_frequency: {
        type: DataTypes.INTEGER,
        require: true
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'ativo'
    }
})

export default Equipment;
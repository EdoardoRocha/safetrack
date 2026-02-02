import 'dotenv/config';
import { engine } from 'express-handlebars';
import flash from 'express-flash';
import express from 'express';

const app = express();
import conn from './db/conn.js';

//Models
import Equipment from './models/Equipment.js';
import Maintenance from './models/Maintenance.js';

//Import Routes
import equipmentRouter from './routes/equipmentRoutes.js';

//Import controllers
import EquipmentController from './controllers/EquipmentController.js';

//Template engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

//Receveid response of body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Session middleware

//Flash message

//Public path
app.use(express.static("public"))

//Set session to res

//Routes
app.use("/equipments", equipmentRouter);
app.get("/", (req, res) => {
    res.render("equipments/home")
});
//Depois vamos adicionar a rota de auth para logar o usuário.

//Conection
conn
    .sync()
    .then(() => {
        app.listen(3000, () => console.log("Sistema funcionando na porta 3000..."))
    })
    .catch(err => {
        console.error(`[LOGERROR]: ${err}`)
    })
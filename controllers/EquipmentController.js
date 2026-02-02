import Equipment from "../models/Equipment.js";

export default class EquipmentController {
    static showEquipments(req, res) {
        res.render("equipments/home")
    }

    static createEquipments(req, res) {
        res.render("equipments/add")
    }

    static async createEquipmentsSave(req, res) {
        const { name, category, date, frequency, stauts } = req.body;

        //Validator Date

        const isDate = date ? date : new Date()

        const data = {
            name,
            category,
            last_revision_date: isDate,
            day_frequency: frequency,
            stauts
        }

        try {
            await Equipment.create(data)
            res.redirect("/equipments")
        } catch (error) {
            console.error(error)
        }
    }

    static async deleteEquipments(req, res) {
        const { id } = req.body;

        try {
            await Equipment.destroy({ where: { id } })

            res.send("Deu certo!")
        } catch (error) {
            console.error(error)
        }
    }
}
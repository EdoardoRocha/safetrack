import Equipment from "../models/Equipment.js";
import Maintenance from "../models/Maintenance.js";

export default class EquipmentController {
  static async showEquipments(req, res) {
    try {
      const equipmentsData = await Equipment.findAll({
        order: [['next_revision_date', 'DESC']]
      });
      const equipments = equipmentsData.map((result) =>
        result.get({ plain: true }),
      );

      return res.render("equipments/home", { equipments });
    } catch (error) {
      console.error(error);
    }

    return res.render("equipments/home");
  }

  static createEquipments(req, res) {
    return res.render("equipments/add");
  }

  static async createEquipmentsSave(req, res) {
    const { name, category, revision, frequency, status } = req.body;

    // 1. Define a data base (se não houver, usa hoje)
    const baseDate = revision ? new Date(revision) : new Date();

    // 2. Cálculo da Próxima Revisão
    // Criamos uma cópia para não alterar a baseDate original
    const nextRevisionDate = new Date(baseDate);
    nextRevisionDate.setDate(baseDate.getDate() + parseInt(frequency));

    // 3. Formatação das Datas (Função auxiliar para evitar repetição)
    const formatDate = (date) => {
      const d = String(date.getUTCDate()).padStart(2, "0");
      const m = String(date.getUTCMonth() + 1).padStart(2, "0");
      const y = date.getUTCFullYear();
      return `${d}/${m}/${y}`;
    };

    const data = {
      name,
      category,
      last_revision_date: formatDate(baseDate),
      next_revision_date: formatDate(nextRevisionDate),
      day_frequency: frequency,
      status,
    };

    try {
      await Equipment.create(data);
      return res.redirect("/equipments");
    } catch (error) {
      console.error(error);
    }
  }

  static async deleteEquipments(req, res) {
    const { id } = req.body;

    try {
      await Equipment.destroy({ where: { id } });

      return res.redirect("/equipments");
    } catch (error) {
      console.error(error);
    }
  }

  static async revisedEquipments(req, res) {
    const id = req.params.id;
    res.render("equipments/revised", { id });
  }

  static async revisedEquipmentsSave(req, res) {
    //Vou receber o ID do equipamento
    const id = req.params.id;
    const getFrequency = await Equipment.findOne({ where: { id }, raw: true });
    const frequency = getFrequency.day_frequency;

    const { service_description, technical, revision } = req.body;

    //Vou buscar o buscar a data de hoje
    const today = new Date(revision + "T12:00:00");
    const daysToAdd = parseInt(frequency) || 30;

    // adicionar a frequência do equipamento
    const nextRevisionDate = new Date(today);
    nextRevisionDate.setDate(today.getDate() + daysToAdd);

    const day = String(nextRevisionDate.getDate()).padStart(2, "0");
    const month = String(nextRevisionDate.getMonth() + 1).padStart(2, "0");
    const year = nextRevisionDate.getFullYear();
    const next_revision_date = `${day}/${month}/${year}`;

    //  atualizar a próxima revisão do equipamento
    const nextRevision = {
      next_revision_date,
    };

    try {
      await Equipment.update(nextRevision, { where: { id } });
      //Salvar no histórico de manutenção
      const maintenance = {
        service_description,
        technical,
        EquipmentId: id,
      };
      await Maintenance.create(maintenance);
    } catch (error) {
      console.error(error);
    }
    return res.redirect("/equipments");
  }
}

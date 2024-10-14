const bcrypt = require("bcryptjs");
const Dangerous = require("../models/dangerous");
const { deleteCompany } = require("./dangerous");
const dangerous = require("../models/dangerous");
const mongoose = require('mongoose');

async function getDangerous(req, res) {
  const { id } = req.params;

  const response = await Dangerous.findById(id);
  if (!response) {
    res.status(400).send({ msg: "No se ha encontrado el formulario del Produccion" });
  } else {
    res.status(200).send(response);
  }
}

async function getDangerousForms(req, res) {
  const { active,  page = 1, limit = 50, site } = req.query;

  const filter={}
  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
    populate: [
      {
        path : 'creator_user',
      },
    ]
  };

  if(active !== undefined){
    options.active=active;
  }
  if(site !== undefined){
    filter.site=mongoose.Types.ObjectId(site);
  }

  Dangerous.paginate(filter, options, (error, dangerous) => {
    if (error) {
      res.status(400).send({ msg: "Error al obtener los formularios de producción" });
    } else {
      res.status(200).send(dangerous);
    }
  });
}

async function createDangerous(req, res) {
  const dangerous = new Dangerous({ ...req.body, active: true });

  dangerous.save((error, dangerousStored) => {
    if (error) {
      console.log(error)
      res.status(400).send({ msg: "Error al crear el formulario del produccion" });
    } else {
      res.status(200).send(dangerousStored);
    }
  });
}

async function updateDangerous(req, res) {
  const { id } = req.params;
  const productionData = req.body;

  Dangerous.findByIdAndUpdate({ _id: id }, productionData, (error,response) => {
    if (error) {
      res.status(400).send({ msg: "Error al actualizar el formulario del produccion" });
    } else {
      res.status(200).send({ msg: "Actualizacion correcta" });
    }
  });
}

async function deleteDangerous(req, res) {
  const { id } = req.params;

 Dangerous.findByIdAndDelete(id, (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al eliminar el formulario del produccion" });
    } else {
      res.status(200).send({ msg: "Formulario eliminado" });
    }
  });
}

async function existsDangerousFormBySiteAndPeriodAndYear(req, res) {
  const { period, year, site } = req.params;

  Dangerous.find(
    { period: period, year: year, site: site },
    {},
    (error, dangerous) => {
      if (error) {
        res
          .status(400)
          .send({ msg: "Error al obtener los formularios de produccion" });
      } else {
        if (dangerous && dangerous.length > 0) {
          res.status(200).send({ code: 200, exist: true });
        } else {
          res.status(200).send({ code: 200, exist: false });
        }
      }
    }
  );
}

async function getPeriodDangerousFormsBySiteAndYear(req, res) {
  const { year, site } = req.params;

  Dangerous.find(
    { year: year, site: site },
    { _id: 0, period: 1 },
    (error, periods) => {
      if (error) {
        res
          .status(400)
          .send({
            msg: "Error al obtener los formularios de produccion de acuerdo al año",
          });
      } else {
        const newData = periods.map((item) => item.period);
        res.status(200).send({ code: 200, periods: newData });
      }
    }
  );
}

async function getDangerousFormsBySiteAndYear(req, res) {
  const { year, site } = req.params;

  Dangerous.find(
    {
      $and: [
        { year: { $exists: true, $eq: year } },
        { site: { $exists: true, $eq: site } },
      ],
    },
    {},
    (error, dangerousForms) => {
      if (error) {
        res
          .status(400)
          .send({
            msg: "Error al obtener los formularios de produccion de acuerdo al año",
          });
      } else {
        res.status(200).send({ code: 200, dangerousForms: dangerousForms });
      }
    }
  );
}

module.exports = {
  getDangerous,
  getDangerousForms,
  createDangerous,
  updateDangerous,
  deleteDangerous,
  existsDangerousFormBySiteAndPeriodAndYear,
  getPeriodDangerousFormsBySiteAndYear,
  getDangerousFormsBySiteAndYear
};
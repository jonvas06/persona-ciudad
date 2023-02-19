const personDto = require("../../model/dto/person.dto.js");
const cityDto = require("../../model/dto/city.dto.js");

module.exports.create = (req, res) => {
  try {
    const {name } =
      req.body;

    const ciudad = {
        name
    };

      cityDto.create(ciudad, (err, data) => {
        if (err) {
          if (err.code == 11000) {
            let key = Object.keys(err.keyValue)[0];
            res.statusMessage = `Ya existe una cuidad con ${key} : ${err.keyValue[key]}`;
          }

          if (!data) {
            return res.status(400).json({
              message: "La cuidad no pudo ser creada",
            });
          }
          return res.status(400).json({
            error: err,
          });
        }

        res.status(201).json({
          message: "cuidad creada con éxito",
          data: data,
        });
      });
  } catch (error) {
    console.log(`Error → ${error}`);
  }
};

module.exports.getAll = (req, res) => {
  try {
    cityDto.getAll({}, (err, data) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }

      if (!data) {
        return res.status(400).json({
          message: "La cuidad no pudieron ser obtenidas",
        });
      }

      res.status(200).json({
        message: "cuidades obtenidas con éxito",
        data: data,
      });
    });
  } catch (error) {
    console.log(`Error → ${error}`);
  }
};

module.exports.update = (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;   

    cityDto.update({ _id: id }, body, (err, data) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      if (!data) {
        return res.status(400).json({
          message:
            "La cuidad no pudo ser actualizada, revisa que el ID que sea el correcto",
        });
      }
      res.status(200).json({
        message: "cuidad editada con éxito",
        data: data,
      });
    });
  } catch (error) {
    console.log(`Error → ${error}`);
  }
};

module.exports.delete = (req, res) => {
  try {
    const { id } = req.params;

    cityDto.delete(id, (err, data) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      if (!data) {
        return res.status(400).json({
          message:
            "La cuidad no pudo ser eliminada, revisa que el ID que sea el correcto",
        });
      }
      res.status(200).json({
        message: "cuidad eliminada con éxito",
        data: data,
      });
    });
  } catch (error) {
    console.log(`Error → ${error}`);
  }
};

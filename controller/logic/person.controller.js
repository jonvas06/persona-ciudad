const personDto = require("../../model/dto/person.dto.js");
const cityDto = require("../../model/dto/city.dto.js");

module.exports.create = (req, res) => {
  try {
    const { name, lastname, age, email, phone, direction, id_ciudad } =
      req.body;

    const person = {
      name,
      lastname,
      age,
      email,
      phone,
      direction,
      id_ciudad,
    };

    cityDto.getById(id_ciudad, (err, data) => {
      if (err) {
        return res.status(400).json({
          message: "Ocurrió un error al buscar la ciudad",
        });
      }

      if (!data) {
        return res.status(400).json({
          message: "la ciudad a la que quiere asociar la persona no existe",
        });
      }

      personDto.create(person, (err, data) => {
        if (err) {
          if (err.code == 11000) {
            let key = Object.keys(err.keyValue)[0];
            res.statusMessage = `Ya existe una persona con ${key} : ${err.keyValue[key]}`;
          }

          if (!data) {
            return res.status(400).json({
              message: "La persona no pudo ser creada",
            });
          }
          return res.status(400).json({
            error: err,
          });
        }

        res.status(201).json({
          message: "Persona creada con éxito",
          data: data,
        });
      });
    });
  } catch (error) {
    console.log(`Error → ${error}`);
  }
};

module.exports.getAll = (req, res) => {
  try {
    personDto.getAll({}, (err, data) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }

      if (!data) {
        return res.status(400).json({
          message: "La persona no pudieron ser obtenidas",
        });
      }

      res.status(200).json({
        message: "Personas obtenidas con éxito",
        data: data,
      });
    });
  } catch (error) {
    console.log(`Error → ${error}`);
  }
};

module.exports.getWithCity = (req, res) => {
  try {
    const { id } = req.params;

    personDto.getWithCity(id, (err, data) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }

      if (!data) {
        return res.status(400).json({
          message:
            "La persona y su ciudad de residencia no pudieron ser obtenidas",
        });
      }
      
      res.status(200).json({
        message: "Persona con ciudad de residencia obtenida con éxito",
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

    personDto.update({ _id: id }, body, (err, data) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      if (!data) {
        return res.status(400).json({
          message:
            "La persona no pudo ser actualizada, revisa que el ID que sea el correcto",
        });
      }
      res.status(200).json({
        message: "Persona editada con éxito",
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

    personDto.delete(id, (err, data) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      if (!data) {
        return res.status(400).json({
          message:
            "La persona no pudo ser eliminada, revisa que el ID que sea el correcto",
        });
      }
      res.status(200).json({
        message: "Persona eliminada con éxito",
        data: data,
      });
    });
  } catch (error) {
    console.log(`Error → ${error}`);
  }
};

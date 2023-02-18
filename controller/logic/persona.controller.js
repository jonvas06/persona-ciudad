const personDto = require('../../model/dto/person.dto.js');

module.exports.create = (req, res) => {
  try {
    const { name, lastname, age, email, phone, id_ciudad } = req.body;

    const person = {
      name,
      lastname,
      age,
      email,
      phone,
      id_ciudad,
    };

    //TODO: Buscar si la ciudad existe

    //TODO: Crear la persona
    personDto.create(person, (err, data) => {
      if (err) {
        if (err.code == 11000) {
          let key = Object.keys(err.keyValue)[0];
          res.statusMessage = `Ya existe una persona con ${key} : ${err.keyValue[key]}`;
        }
        return res.status(400).json({
          error: err,
        });
      }

      res.status(201).json({
        data: data,
      });
    });

    console.log(req.body);
    return res.status(200).send(data);
  } catch (error) {
    console.log(`Error → ${error}`);
  }
};

module.exports.getAll = (req, res) => {
  try {
  } catch (error) {
    console.log(`Error → ${error}`);
  }
};

module.exports.getWithCity = (req, res) => {
  try {
  } catch (error) {
    console.log(`Error → ${error}`);
  }
};

module.exports.Update = (req, res) => {
  try {
  } catch (error) {
    console.log(`Error → ${error}`);
  }
};

module.exports.Delete = (req, res) => {
  try {
  } catch (error) {
    console.log(`Error → ${error}`);
  }
};

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
    
    console.log(req.body);
    return res.status(200).send("TEST PASADO CON ÉXITO");
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

/**packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/**schema creation*/
const citySchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
  }
});

/**schema exportation */
citySchema.plugin(validator);
module.exports = citySchema;

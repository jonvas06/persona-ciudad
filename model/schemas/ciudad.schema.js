/**packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/**schema creation*/
const ciudadSchema=new mongoose.Schema({
    name:{
        type: "String",
        required: true,
    },
    id_ciudad:{
        type: "String",
        required: true,
        unique:true
    }
});

/**schema exportation */
ciudadSchema.plugin(validator)
module.exports=ciudadSchema;
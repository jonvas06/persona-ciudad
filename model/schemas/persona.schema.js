/**packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/**schema creation*/
const personaSchema= new mongoose.Schema({
    name:{
        type: "String",
        required: true,
    },
    lastname:{
        type: "String",
        required: true,
    },
    age:{
        type: "String",
        required: true
    },
    email:{
        type: "String",
        required: true
    }, 
    phone:{
        type: "String",
        required: true
    },
    id_ciudad:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"ciudad",
        required: true,
    }
});

/**schema exportation */
personaSchema.plugin(validator)
module.exports=personaSchema;
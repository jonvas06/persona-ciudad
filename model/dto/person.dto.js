/**packages */
const mongoose = require("mongoose");
const db = require("../db-connection/mongodb");

/** using schema */
const schema = require("../schemas/persona.schema");
db();

schema.statics = {
  create: async function (data, cb) {
    try {
      let doc = new this(data);
      doc.save(cb);
    } catch (error) {
      throw error;
    }
  },
  getAll: async function (query, cb) {
    try {
      this.find(query, cb);
    } catch (error) {
      throw error;
    }
  },
  getWithCity: function (id, cb) {
    try {
      this.findById(id).populate("Ciudad").exec(cb);
    } catch (error) {
      throw error;
    }
  },
  update: function (query, data, cb) {
    try {
      this.findOneAndUpdate(query, { $set: data }, { new: true }, cb);
    } catch (error) {
      throw error;
    }
  },
  delete: function (query, cb) {
    try {
      this.findOneAndDelete(query);
    } catch (error) {
      throw error;
    }
  },
  // getByCode: function (query, cb) {
  //   try {
  //     this.find(query, cb);
  //   } catch (error) {
  //     throw error;
  //   }
  // },
};

const dto = mongoose.model("Person", schema);
module.exports = dto;

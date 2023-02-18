/**packages */
const mongoose = require("mongoose");

/** using schema */
const schema = require("../schemas/ciudad.schema");

schema.statics = {
  create: function (data, cb) {
    try {
      let doc = new this(data);
      doc.save(cb);
    } catch (error) {
      throw error;
    }
  },
  getAll: function (query, cb) {
    try {
      this.find(query, cb);
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
      this.findOneAndDelete(query, cb);
    } catch (error) {
      throw error;
    }
  },
  getById: function (query, cb) {
    this.findById(query, cb);
  }
};

const dto = mongoose.model("City", schema);
module.exports = dto;

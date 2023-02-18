/**packages */
const mongoose = require("mongoose");
const db = require("./../db-connection/mongodb");

/** using schema */
const schema = require("./../schemas/persona.schema");
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
  getByCode: function (query, cb) {
    try {
      this.find(query, cb);
    } catch (error) {
      throw error;
    }
  },
  getCiudadById: async function (id) {
    try {
      this.findById(id).populate("Ciudad");
    } catch (error) {
      throw error;
    }
  },
  update: async function (query, data, cb) {
    try {
      this.findOneAndUpdate(query, { $set: data }, { new: true }, cb);
    } catch (error) {
      throw error;
    }
  },
  delete: async function (query, cb) {
    try {
      this.findOneAndDelete(query);
    } catch (error) {
      throw error;
    }
  },
};

const dto = mongoose.model("coll_persona", schema);
module.exports = dto;

/*
getWithRole: async function (id) {
  try {
    return await this.findById(id, 'name email').populate('role', 'name').exec();
    // return await this.findOne({ _id:ObjectId(id) }).exec();
    console.log("test ", id);
  } catch (error) {
    throw error;
  }}*/

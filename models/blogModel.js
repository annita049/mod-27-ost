const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    short_des: { type: String, required: true },
    des: { type: String, required: true },
    img: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const blogModel = mongoose.model("blogs", DataSchema);

module.exports = blogModel;

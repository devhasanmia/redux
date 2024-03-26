const mongoose = require("mongoose");

const { Schema } = mongoose;

const pcSchema = new Schema({
  _id: Number,
  model: String,
  image: String,
  status: Boolean,
  keyFeature: [String],
  price: Number,
  rating: Number,
  spec: [
    {
      processor: String,
      motherboard: String,
      ram: String,
      graphics: String,
      storage: String,
      casing: String,
      psu: String,
      cooler: String,
    },
  ],
});

const Product = mongoose.model("Product", pcSchema);

module.exports = Product;

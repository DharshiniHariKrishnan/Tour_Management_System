const mongoose = require('mongoose')
const placeSchema = new mongoose.Schema({
  place_name: String,
});

module.export = mongoose.model("places", placeSchema);


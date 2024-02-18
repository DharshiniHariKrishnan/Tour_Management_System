const express = require("express");
const { searchPlace } = require("../controllers/search.js");


const search = express.Router();

search.get("/autocomplete", searchPlace);

module.exports = search;


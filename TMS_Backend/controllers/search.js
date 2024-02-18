const places = require("../models/places.js");
const searchPlace = async (req, res) => {
  const input = req.query.q;
  const regex = new RegExp(`^${input}`, "i");
  //   console.log(regex, "regex");
  try {
    const results = await places.find({ place_name: regex }, "place_name");
    res.json(results);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = {
  searchPlace
}

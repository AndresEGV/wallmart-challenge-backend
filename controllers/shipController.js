const Ship = require("../models/Ship");
const { validationResult } = require("express-validator");
exports.newShip = async (req, res) => {
  console.log(req.body);
  //Show errors from express validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //Create new Ship
  const newShip = new Ship(req.body);

  try {
    await newShip.save();
    res.json({ msg: "ship created successfully " });
  } catch (error) {
    console.log(error);
  }
};

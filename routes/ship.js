const express = require("express");
const router = express.Router();
const shipController = require("../controllers/shipController");
const { check } = require("express-validator");

router.post(
  "/",
  [
    check("name", "the name is required").not().isEmpty(),
    check("model", "the model is required").not().isEmpty(),
    check("passangers", "the passangers is required and must be numeric")
      .not()
      .isEmpty()
      .isNumeric(),

    check("starship_class", "the starship class is required").not().isEmpty(),
    check(
      "cargo_capacity",
      "the cargo capacity is required and must be numeric"
    )
      .not()
      .isEmpty()
      .isNumeric(),
  ],
  shipController.newShip
);

module.exports = router;

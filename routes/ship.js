const express = require("express");
const router = express.Router();
const shipController = require("../controllers/shipController");
const { check } = require("express-validator");

/**
 * @swagger
 * components:
 *  schemas:
 *    Ship:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: the ship name
 *        model:
 *          type: string
 *          description: the ship model
 *        manufacter:
 *          type: string
 *          description: the ship manufacter
 *        passangers:
 *          type: number
 *          description: the ship passangers
 *        starShipClass:
 *          type: string
 *          description: the  star Ship Class
 *        cargoCapacity:
 *          type: number
 *          description: the ship cargo Capacity
 *      required:
 *        - name
 *        - model
 *        - passangers
 *        - starShipClass
 *        - cargoCapacity
 *      example:
 *        name: Star-X Rebel
 *        model: StarWing
 *        manufacter: Andres
 *        passangers: 4
 *        starShipClass: Fighter
 *        cargoCapacity: 400
 *  */

/**
 * @swagger
 * /api/interstellar-ships:
 *  post:
 *    summary: Create a new ship
 *    tags: [Ship]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Ship'
 *    responses:
 *      200:
 *         description: ship created successfully!
 *
 * */

router.post(
  "/",
  [
    check("name", "the name is required").not().isEmpty(),
    check("model", "the model is required").not().isEmpty(),
    check("passangers", "the passangers is required and must be numeric")
      .not()
      .isEmpty()
      .isNumeric(),

    check("starShipClass", "the starship class is required").not().isEmpty(),
    check("cargoCapacity", "the cargo capacity is required and must be numeric")
      .not()
      .isEmpty()
      .isNumeric(),
  ],
  shipController.newShip
);

module.exports = router;

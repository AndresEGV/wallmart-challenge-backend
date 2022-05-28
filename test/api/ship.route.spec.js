/**
 * @jest-environment node
 */
const request = require("supertest");
const { app } = require("../../server");
const conectarDb = require("../../config/db");
const mongoose = require("mongoose");
describe("Test about starwars api", () => {
  beforeAll(async () => {
    await conectarDb();
  });
  afterAll(async () => {
    await mongoose.disconnect();
  });
  describe("POST /api/interstellar-ships", () => {
    const newShip = {
      name: "StarFighter",
      model: "X-wag",
      manufacter: "John Doe",
      passangers: 2,
      starShipClass: "Fighter",
      cargoCapacity: 400,
    };
    const wrongTrip = { nombre: "StarFighter test" };
    it("check if route it's ok", async () => {
      const response = await request(app)
        .post("/api/interstellar-ships")
        .send(newShip);

      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toBe(
        "application/json; charset=utf-8"
      );
    });
    it("insert successfully", async () => {
      const response = await request(app)
        .post("/api/interstellar-ships")
        .send(newShip);

      expect(response.body.msg).toBeDefined();
    });
    it("Error in insertion", async () => {
      const response = await request(app)
        .post("/api/interstellar-ships")
        .send(wrongTrip);

      expect(response.status).toBe(400);
      expect(response.body.errors).toBeDefined();
    });
  });
});

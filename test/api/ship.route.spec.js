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
      starship_class: "Fighter",
      cargo_capacity: 400,
    };

    it("check if route it's ok", async () => {
      const response = await request(app)
        .post("/api/interstellar-ships")
        .send(newShip);

      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toBe(
        "application/json; charset=utf-8"
      );
    });
  });
});

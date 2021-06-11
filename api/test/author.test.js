const request = require('supertest');
const app = require('../index')

describe('insert', () => {

  test("should respond 200 as added", async () => {
      const response = await request(app).post("/author").send({
          firstName: "Raj",
          lastName: "Kamal",
          nationality: "American"
      })
      expect(response.statusCode).toBe(200);
  })
});
import request from "supertest"

import { app } from "../app"

process.env.NODE_ENV = "test"

describe("GET /health/heartbeat", () => {
  test("Should return 'pinged'", async () => {

    const response = {
      message: "In Service"
    }

    await request(app)
      .get("/api/health/heartbeat")
      .expect(200)
      .then(({body}) => {
        expect(body).toEqual(response)
      })
  })
})
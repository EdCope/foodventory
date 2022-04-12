const pantryRouter = require("../../routes/pantry");

const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.json());
app.use("/pantry", pantryRouter);

describe("Pantry routes/controllers ", () => {
  it("can add an ingredient", () => {
    request(app)
      .post("/pantry/add")
      .type("form")
      .send({ ingredient: "Apple" })
      .then(() => {
        request(app)
          .get("/pantry/all")
          .expect({ array: ["Apple"] });
      });
  });

  it("cannot add a duplicate ingredient", () => {
    request(app)
      .post("/pantry/add")
      .type("form")
      .send({ ingredient: "Apple" }).then(() => {
        request(app)
        .post("/pantry/add")
        .type("form")
        .send({ ingredient: "Apple" }).expect({ message: `Apple already in pantry.` })
      });
  });

  it("can remove an ingredient", () => {
    request(app)
      .post("/pantry/add")
      .type("form")
      .send({ ingredient: "Apple" })
      .then(() => {
        request(app)
        .post("/pantry/remove")
        .type("form")
        .send({ ingredient: "Apple" })
        .expect({ message: `Apple successfully removed` });
      });
  });
});

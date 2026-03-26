const request = require("supertest");
const app = require("../src/app");

describe("API Tasks", () => {

  test("GET /tasks devuelve lista", async () => {
    const res = await request(app).get("/tasks");
    expect(res.statusCode).toBe(200);
  });

  test("POST /tasks crea tarea", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ name: "Mi tarea" });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Mi tarea");
  });

  test("PUT /tasks actualiza tarea", async () => {
    const task = await request(app)
      .post("/tasks")
      .send({ name: "Viejo" });

    const res = await request(app)
      .put(`/tasks/${task.body.id}`)
      .send({ name: "Nuevo" });

    expect(res.body.name).toBe("Nuevo");
  });

  test("DELETE /tasks elimina tarea", async () => {
    const task = await request(app)
      .post("/tasks")
      .send({ name: "Eliminar" });

    const res = await request(app)
      .delete(`/tasks/${task.body.id}`);

    expect(res.statusCode).toBe(204);
  });

});
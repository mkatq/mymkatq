const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("./app"); // your Express app

let mongo;

beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongo.stop();
});

describe("Admin Portfolio API", () => {

  // Root test
  it("GET /api should return welcome message", async () => {
    const res = await request(app).get("/api");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message");
  });

  // ===== PROJECTS =====
  describe("Projects API", () => {
    let projectId;

    it("POST /api/projects - create project", async () => {
      const res = await request(app)
        .post("/api/projects")
        .send({
          title: "Test Project",
          description: "Project description",
          technologies: ["Node", "React"]
        });

      expect(res.statusCode).toBe(201);
      projectId = res.body._id;
    });

    it("GET /api/projects - list projects", async () => {
      const res = await request(app).get("/api/projects");
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });

    it("GET /api/projects/:id - get single project", async () => {
      const res = await request(app).get(`/api/projects/${projectId}`);
      expect(res.statusCode).toBe(200);
      expect(res.body._id).toBe(projectId);
    });

    it("PUT /api/projects/:id - update project", async () => {
      const res = await request(app)
        .put(`/api/projects/${projectId}`)
        .send({ title: "Updated Project" });

      expect(res.statusCode).toBe(200);
      expect(res.body.title).toBe("Updated Project");
    });

    it("DELETE /api/projects/:id - delete project", async () => {
      const res = await request(app).delete(`/api/projects/${projectId}`);
      expect(res.statusCode).toBe(200);
    });
  });

  // ===== SKILLS =====
  describe("Skills API", () => {
    let skillId;

    it("POST /api/skills", async () => {
      const res = await request(app)
        .post("/api/skills")
        .send({ title: "JavaScript", icon: "js-icon" });

      expect(res.statusCode).toBe(201);
      skillId = res.body._id;
    });

    it("GET /api/skills", async () => {
      const res = await request(app).get("/api/skills");
      expect(res.statusCode).toBe(200);
    });

    it("DELETE /api/skills/:id", async () => {
      const res = await request(app).delete(`/api/skills/${skillId}`);
      expect(res.statusCode).toBe(200);
    });
  });

  // ===== ABOUT =====
  describe("About API", () => {

    it("PUT /api/about", async () => {
      const res = await request(app)
        .put("/api/about")
        .send({ 
          description: "About me text", 
          email: "test@example.com", 
          phone: "123-456-7890", 
          github: "github.com/test", 
          linkedin: "linkedin.com/in/test" 
        });

      expect(res.statusCode).toBe(200);
    });

    it("GET /api/about", async () => {
      const res = await request(app).get("/api/about");
      expect(res.statusCode).toBe(200);
    });
  });

});

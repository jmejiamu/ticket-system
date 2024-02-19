const bodyParser = require("body-parser");
const express = require("express");
require("dotenv").config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "",
    database: "ticket_db",
    port: 5432,
  },
});

app.post("/api-v1/request-ticket", async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, description, ticket_status } = req.body;
    await knex("tikets").insert({
      name,
      email,
      ticket_status,
      description,
    });
    return res.json({ message: "Ticket created successfully" }).status(201);
  } catch (error) {
    console.log(error);
    return res.json({ message: "Error" }).status(500);
  }
});

app.get("/api-v1/get-tickets", async (req, res) => {
  try {
    let data = await knex("tikets").select();
    if (!data.length) throw new Error("No Data Found!");
    return res.json(data).status(200);
  } catch (error) {
    console.log(error);
    return res.json({ message: "Error" }).status(500);
  }
});

app.put("/api-v1/update-ticket/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { ticket_status } = req.body;
    await knex("tikets").where({ id }).update({ ticket_status });
    return res.json({ message: "Ticket updated successfully" }).status(200);
  } catch (error) {
    console.log(error);
    return res.json({ message: "Error" }).status(500);
  }
});

const PORT = 3500;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

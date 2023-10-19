const express = require("express");
const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Lucas", age: 27 },
  { id: 2, name: "Maria", age: 17 },
  { id: 3, name: "Luna", age: 22 },
  { id: 4, name: "Lucas", age: 23 },
];

app.get("/users", (req, res) => {
  return res.send(users);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === +id);
  return res.send(user);
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const index = users.findIndex((user) => user.id === +id);
  users.splice(index, 1);
  return res.send();
});

app.patch("/users/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const index = users.findIndex((user) => user.id === +id);
  users[index] = {
    ...users[index],
    color: data.color,
    number: data.number,
  };
  return res.send();
});

app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  return res.send();
});

app.listen(8000, () => {
  console.log("Server is running 8000");
});

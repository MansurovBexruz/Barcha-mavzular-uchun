import express from "express";
import { todos } from "./db";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/todos", (req, res) => {
	res.send(todos);
});

app.get("/todos/:todoId", (req, res) => {
	const todoId = Number(req.params.todoId);
	const todo = todos.find((todo) => todo.id === todoId);
	if (todo) res.send(todo);
	else res.send({ message: "Not found" });
});

const PORT = 4000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});

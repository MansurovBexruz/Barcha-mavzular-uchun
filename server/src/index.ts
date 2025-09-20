import express from "express";
import cors from "cors";
import type { Game, Player } from "./types";
import { faker } from "@faker-js/faker";
import { players, games } from "./db";
import { getRandomPlayerId } from "./utils";
import { z } from "zod";

const app = express();
app.use(cors()); // CORS - Allow access any domain requesting to this server
app.use(express.json()); // Parse JSON body

const registerSchema = z.object({
	name: z.string().min(4, "Name must be at least 4 characters"),
	email: z.email().min(1, "Email is required field"),
	password: z.string().min(4, "Password must be at least 4 characters"),
});

app.post("/auth/register", (req, res) => {
	console.log("[IP][REGISTER] = ", req.ip);
	const { error, data } = registerSchema.safeParse(req.body);
	if (error) {
		return res.status(400).send({ error: JSON.parse(error.message) });
	}

	const player: Player = {
		id: faker.string.uuid(),
		name: data.name,
		email: data.email,
		rank: 0,
		password: data.password,
	};

	players.push(player);

	res.send({ player });
});
app.post("/auth/login", (req, res) => {
	console.log("[IP][LOGIN] = ", req.ip);
	const { email, password } = req.body;
	const player = players.find((player) => player.email === email && player.password === password);
	if (!player) return res.status(401).send({ error: "Invalid email or password" });

	res.send({ player });
});

app.get("/games/my-games/:playerId", (req, res) => {
	const playerId = req.params.playerId;
	const _games: Game[] = games.filter(
		(game) => game.player1Id === playerId || game.player2Id === playerId
	);

	res.send({ games: _games });
});

app.get("/games/:gameId", (req, res) => {
	const gameId = req.params.gameId;
	const game = games.find((game) => game.id === gameId);
	if (!game) return res.status(404).send({ error: "Game is not found" });
	res.send({ game });
});

app.post("/games", (req, res) => {
	const player1Id = req.body.player1Id;
	const player2Id = getRandomPlayerId(player1Id);
	const nextPlayerId = [player1Id, player2Id][Math.floor(Math.random() * 2)];

	const game: Game = {
		id: faker.string.uuid(),
		player1Id,
		player2Id,
		board: Array(9).fill(null),
		winnerId: null,
		nextPlayerId,
		status: "pending",
	};

	games.push(game);

	res.send({ game });
});

app.patch("/games/move", (req, res) => {
	const { gameId, board } = req.body;
	const game = games.find((game) => game.id === gameId);
	if (!game) return res.status(404).send({ error: "Game is not found" });

	game.board = board;
	game.nextPlayerId = game.nextPlayerId === game.player1Id ? game.player2Id : game.player1Id;

	res.send({ game });
});

app.get("/players/:playerId", (req, res) => {
	const playerId = req.params.playerId;
	const player = players.find((player) => player.id === playerId);
	if (!player) return res.status(404).send({ error: "Player is not found" });

	res.send({ player });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

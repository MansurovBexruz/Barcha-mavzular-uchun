import express from "express";
import cors from "cors";
import type { Player } from "./types";
import { faker } from "@faker-js/faker";
import { players } from "./db";

const app = express();
app.use(cors()); // CORS - Allow access any domain requesting to this server
app.use(express.json()); // Parse JSON body

app.post("/auth/register", (req, res) => {
  const player: Player = {
    id: faker.string.uuid(),
    name: req.body.name,
    email: req.body.email,
    rank: 0,
    password: req.body.password,
  };

  players.push(player);

  res.send({ player });
});

app.post("/auth/login", (req, res) => {});

app.get("/games/my/:playerId", (req, res) => {
  console.log("playerId", req.params.playerId);
});
app.post("/games", (req, res) => {});

const PORT = 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

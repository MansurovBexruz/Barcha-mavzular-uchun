import { players } from "./db";

export function getRandomPlayerId(currentPlayerId: string) {
	const _players = players.filter((player) => player.id !== currentPlayerId);
	const randomIdx = Math.floor(Math.random() * _players.length);
	const randomPlayer = _players[randomIdx]!;
	return randomPlayer.id;
}
export interface Player {
	id: string;
	name: string;
	email: string;
	rank: number;
	password: string;
}

export interface Game {
	id: string;
	player1Id: string;
	player2Id: string;
	board: Board;
	winnerId: string | null;
	nextPlayerId: string;
	status: "completed" | "pending";
}

export type Cell = "X" | "O" | null;
export type Board = Cell[];

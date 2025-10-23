import { Component } from "react";
import { Start, Cell } from "~/components";
import type { Board, GameLevel, Size } from "~/types";
import { MAX_LIVES } from "~/constants";
import { generateGame } from "~/lib";

interface AppState {
  gameLevel: GameLevel | null;
  lives: number;
  board: Board | null;
  size: Size | null;
}

export default class App extends Component<{}, AppState> {
  state: AppState = {
    gameLevel: null,
    lives: MAX_LIVES,
    board: null,
    size: null
  };

  handleStart = () => {
    const { board, size } = generateGame("level-8");
    this.setState({ gameLevel: 1, board, size });
  };

  render() {
    const { board, size } = this.state;

    if (!board) return <Start onStart={this.handleStart} />;

    return (
      <div className="grid size-120 place-items-center" style={{ gridTemplateColumns: `repeat(${size!.size}, 1fr)` }}>
        {board.map(cell => (
          <Cell key={cell.id} cell={cell} />
        ))}
      </div>
    );
  }
}

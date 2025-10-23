import { MAX_INCORRECT_SELECTED_CELLS } from "~/constants";
import type { Board, Cell, LevelKEY, Size } from "~/types";

const sizes: Record<LevelKEY, Size> = {
  "level-1": { size: 3, countOfMemoized: 3 },
  "level-2": { size: 3, countOfMemoized: 4 },
  "level-3": { size: 4, countOfMemoized: 5 },
  "level-4": { size: 4, countOfMemoized: 6 },
  "level-5": { size: 4, countOfMemoized: 7 },
  "level-6": { size: 5, countOfMemoized: 8 },
  "level-7": { size: 5, countOfMemoized: 9 },
  "level-8": { size: 5, countOfMemoized: 10 },
  "level-9": { size: 5, countOfMemoized: 11 },
  "level-10": { size: 5, countOfMemoized: 12 }
};

function generateCells(length: number, countOfMemoized: number): Cell[] {
  const cells: Cell[] = Array.from({ length }, () => ({
    id: Math.random(),
    isMemoized: false,
    isSelected: false
  }));

  for (let i = 0; i < countOfMemoized; i++) {
    const randomIndex = Math.floor(Math.random() * length);
    cells[randomIndex].isMemoized = true;
  }

  return cells;
}

export function generateGame(levelKey: LevelKEY) {
  const size = sizes[levelKey];
  const board: Board = generateCells(size.size ** 2, size.countOfMemoized);

  return { board, size };
}

export function isRoundOver(cells: Cell[], selectedId: number) {
  const cell = cells.find(cell => cell.id === selectedId)!;
  cell.isSelected = true;

  const incorrectSelectedCells = cells.filter(cell => cell.isSelected && !cell.isMemoized);
  return incorrectSelectedCells.length > MAX_INCORRECT_SELECTED_CELLS;
}

export function isGamWon(cells: Cell[], countOfMemoized: number) {
  const selectedMemoizedCells = cells.filter(cell => cell.isSelected && cell.isMemoized).length;
  return selectedMemoizedCells === countOfMemoized;
}

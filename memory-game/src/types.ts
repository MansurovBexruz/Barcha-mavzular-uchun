export interface Cell {
  id: number;
  isMemoized: boolean;
  isSelected: boolean;
}
export type GameLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type LevelKEY = `level-${GameLevel}`;
export type Board = Cell[];
export type Size = { size: number; countOfMemoized: number };

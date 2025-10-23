import type { Cell as TCell } from "~/types";

interface CellProps {
  cell: TCell;
}

export const Cell = ({ cell }: CellProps) => (
  <div className="z-[1] inline-block size-full [transform:rotateX(0deg)_translateZ(1px)] cursor-pointer rounded-[10px] border-4 border-[rgba(0,0,0,0)] bg-[rgb(0,0,102)] [background-clip:padding-box!important] align-top opacity-15 transition-transform ease-out [backface-visibility:visible]"></div>
);

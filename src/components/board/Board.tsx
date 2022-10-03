import { Square } from "../square/Square";
import "./Board.css";
interface BoardProps {
  squares: (string | null)[];
  boldLine?: number[];
  size: number;
  xIsNext: boolean;
  onClick: (i: number) => void;
}

export const Board = ({
  squares,
  boldLine,
  size,
  xIsNext,
  onClick,
}: BoardProps) => {
  const renderSquare = (i: number) => {
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => onClick(i)}
        bold={boldLine && boldLine.includes(i)}
        next={xIsNext ? "X" : "O"}
      />
    );
  };

  return (
    <div>
      {Array(size)
        .fill(null)
        .map((_, i) => {
          return (
            <div key={i} className="board-row">
              {Array(size)
                .fill(null)
                .map((_, j) => {
                  return renderSquare(i * size + j);
                })}
            </div>
          );
        })}
    </div>
  );
};

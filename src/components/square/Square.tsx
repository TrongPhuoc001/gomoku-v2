import "./Square.css";

interface SquareProps {
  value: string | null;
  onClick: () => void;
  bold?: boolean;
  next: string;
}

export const Square = ({ bold, value, next, onClick }: SquareProps) => {
  return (
    <button
      className={`${value} square ${bold ? "bold" : ""}`}
      onClick={onClick}
    >
      {value}
      {!value ? <span className={`square-hover ${next}`}>{next}</span> : null}
    </button>
  );
};

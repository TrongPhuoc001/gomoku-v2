export const Instruction = ({
  winner,
  xIsNext,
}: {
  winner: string;
  xIsNext: boolean;
}) => {
  return (
    <div className="instruction">
      {winner ? "Winner: " + winner : "Next player: " + (xIsNext ? "X" : "O")}
    </div>
  );
};

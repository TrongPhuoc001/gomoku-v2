import "./SizeForm.css";

export const SizeForm = ({
  boardSize,
  winningCondition,
  onBoardSizeChange,
  onWinningConditionChange,
}: {
  boardSize: number;
  winningCondition: number;
  onBoardSizeChange: (e: React.FormEvent) => void;
  onWinningConditionChange: (e: React.FormEvent) => void;
}) => {
  return (
    <div className="form-field">
      <div className="size-field">
        <label>Board Size :</label>
        <input
          type="number"
          min="3"
          max="35"
          value={boardSize}
          onChange={onBoardSizeChange}
        />{" "}
        x{boardSize}
      </div>
      <div className="condition-field">
        <label>| Winning rule :</label>
        <input
          type="number"
          min="3"
          max="35"
          value={winningCondition}
          onChange={onWinningConditionChange}
        />{" "}
        in a row
      </div>
    </div>
  );
};

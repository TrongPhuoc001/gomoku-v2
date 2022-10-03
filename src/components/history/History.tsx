import { useState } from "react";
import "./History.css";
import { HistoryItemType } from "../../types/HistoryType";

export const History = ({
  history,
  size,
  stepNumber,
  onClick,
}: {
  history: HistoryItemType[];
  size: number;
  stepNumber: number;
  onClick: (i: number) => void;
}) => {
  const [sortASC, setSortASC] = useState(true);
  return (
    <div className="history">
      <div>
        Sort
        <button onClick={() => setSortASC(!sortASC)}>
          {sortASC ? "ASC" : "DSC"}
        </button>
      </div>
      <ol className={`${sortASC ? "" : "flex-reverse"}`}>
        {history.map((step, move) => {
          const desc = move
            ? "Go to move #" +
              move +
              " " +
              (step.isX ? "X" : "O") +
              `(${step.location % size},${Math.floor(step.location / size)})`
            : "Go to game start";
          return (
            <li
              key={move}
              className={`history-button ${
                move === stepNumber ? "history-selected" : " "
              }`}
            >
              <button onClick={() => onClick(move)}>{desc}</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

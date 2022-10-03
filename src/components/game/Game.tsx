import { useEffect } from "react";
import { useState } from "react";
import "./Game.css";
import { HistoryItemType } from "../../types/HistoryType";
import { calculateWinner } from "../../Until/caculateWinner";
import { Board } from "../board/Board";
import { History } from "../history/History";
import { Instruction } from "../instruction/Instruction";

interface GameProps {
  size: number;
  rule: number;
}

interface GameState {
  history: HistoryItemType[];
  stepNumber: number;
  xIsNext: boolean;
}

export const Game = ({ size, rule }: GameProps) => {
  const [gameState, setGameState] = useState<GameState>({
    history: [
      {
        squares: Array(size * size).fill(null),
        location: NaN,
        isX: true,
      },
    ],
    stepNumber: 0,
    xIsNext: true,
  });

  const [winner, line] = calculateWinner(
    gameState.history[gameState.stepNumber].squares,
    size,
    rule
  );

  useEffect(() => {
    setGameState({
      history: [
        {
          squares: Array(size * size).fill(null),
          location: NaN,
          isX: true,
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    });
  }, [size]);

  const handleClick = (i: number) => {
    const history = gameState.history.slice(0, gameState.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares, size, rule)[0] || squares[i]) {
      return;
    }
    squares[i] = gameState.xIsNext ? "X" : "O";
    setGameState({
      history: history.concat([
        {
          squares: squares,
          location: i,
          isX: gameState.xIsNext,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !gameState.xIsNext,
    });
  };

  const handleHistoryChange = (step: number) => {
    setGameState({
      ...gameState,
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={gameState.history[gameState.stepNumber].squares}
          onClick={(i) => handleClick(i)}
          size={size}
          boldLine={line as number[]}
          xIsNext={gameState.xIsNext}
        />
      </div>
      <div className="game-info">
        <Instruction winner={winner as string} xIsNext={gameState.xIsNext} />
        <History
          history={gameState.history}
          size={size}
          stepNumber={gameState.stepNumber}
          onClick={handleHistoryChange}
        />
      </div>
    </div>
  );
};

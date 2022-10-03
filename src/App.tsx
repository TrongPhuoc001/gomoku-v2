import { FormEvent, useState } from "react";
import "./App.css";
import { Game } from "./components/game/Game";
import { SizeForm } from "./components/sizeForm/SizeForm";

const App = () => {
  const [gameCondition, setGameCondition] = useState({
    boardSize: 10,
    winningCondition: 5,
  });
  const handleBoardSizeChange = (e: FormEvent) => {
    setGameCondition({
      ...gameCondition,
      boardSize: +(e.target as HTMLInputElement).value || 3,
    });
  };
  const handleWinningConditionChange = (e: FormEvent) => {
    if (+(e.target as HTMLInputElement).value > gameCondition.boardSize) {
      alert("Winning condition cannot be greater than board size");
      return;
    }
    setGameCondition({
      ...gameCondition,
      winningCondition: +(e.target as HTMLInputElement).value || 3,
    });
  };

  return (
    <div className="App">
      <SizeForm
        {...gameCondition}
        onBoardSizeChange={handleBoardSizeChange}
        onWinningConditionChange={handleWinningConditionChange}
      />
      <Game
        size={gameCondition.boardSize}
        rule={gameCondition.winningCondition}
      />
    </div>
  );
};

export default App;

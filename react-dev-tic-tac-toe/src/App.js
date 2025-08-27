import { useState } from "react";
import { Board } from "./components/Board";

export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [isAscending, setIsAscending] = useState(true);

  const xIsNext = currentMoveIndex % 2 === 0;
  const currentSquares = history[currentMoveIndex];

  const historyButtons = history.map((_, moveIndex) => {
    const description = getMoveDescription(
      history,
      moveIndex,
      currentMoveIndex
    );

    return (
      <li key={moveIndex}>
        <button onClick={() => setCurrentMoveIndex(moveIndex)}>
          {description}
        </button>
      </li>
    );
  });

  const displayedButtons = isAscending
    ? historyButtons
    : [...historyButtons].slice().reverse();

  function handlePlay(nextSquares) {
    const nextHistory = [
      ...history.slice(0, currentMoveIndex + 1),
      nextSquares,
    ];

    setHistory(nextHistory);
    setCurrentMoveIndex(nextHistory.length - 1);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button onClick={() => setIsAscending((prev) => !prev)}>
          Sort: {isAscending ? "Ascending" : "Descending"}
        </button>
        <ol reversed={!isAscending}>{displayedButtons}</ol>
      </div>
    </div>
  );
}

function getMoveDescription(history, moveIndex, currentMoveIndex) {
  if (moveIndex === 0) return "Go to game start";

  const [row, col] = getMoveLocation(history, moveIndex);

  if (moveIndex === currentMoveIndex)
    return `You are here #${moveIndex} (${row}, ${col})`;
  return `Go to move #${moveIndex} (${row}, ${col})`;
}

function getMoveLocation(history, moveIndex) {
  const prev = history[moveIndex - 1];
  const curr = history[moveIndex];

  let changedIndex = -1;
  for (let i = 0; i < curr.length; i++) {
    if (prev[i] !== curr[i]) {
      changedIndex = i;
      break;
    }
  }

  const row = Math.floor(changedIndex / 3) + 1;
  const col = (changedIndex % 3) + 1;
  return [row, col];
}

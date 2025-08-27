import { Square } from "./Square";
import { calculateWinner } from "../utils/game";

export function Board({ xIsNext, squares, onPlay }) {
  const result = calculateWinner(squares);
  const isDraw = result === null && squares.every((square) => square !== null);

  const status = result
    ? `Winner: ${result.winner}`
    : isDraw
    ? "Draw"
    : `Next player: ${xIsNext ? "X" : "O"}`;

  function handleClick(i) {
    if (result || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const renderSquare = (i) => (
    <Square
      key={i}
      value={squares[i]}
      onSquareClick={() => handleClick(i)}
      isWinning={result?.winningLine?.includes(i)}
    />
  );

  return (
    <>
      <div className="status">{status}</div>
      {[0, 3, 6].map((start) => (
        <div className="board-row" key={start}>
          {[0, 1, 2].map((offset) => renderSquare(start + offset))}
        </div>
      ))}
    </>
  );
}

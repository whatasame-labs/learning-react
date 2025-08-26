import { Square } from "./Square";
import { calculateWinner } from "../utils/game";

export function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  function handleClick(i) {
    if (winner || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const renderSquare = (i) => (
    <Square value={squares[i]} onSquareClick={() => handleClick(i)} />
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

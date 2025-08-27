export function Square({ value, onSquareClick, isWinning }) {
  return (
    <button
      className={`square ${isWinning ? "winner" : ""}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

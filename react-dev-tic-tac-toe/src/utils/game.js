export function calculateWinner(squares) {
  const horizontalWinningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const verticalWinningLines = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  const diagonalWinningLines = [
    [0, 4, 8],
    [2, 4, 6],
  ];

  const winningLines = [
    ...horizontalWinningLines,
    ...verticalWinningLines,
    ...diagonalWinningLines,
  ];

  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

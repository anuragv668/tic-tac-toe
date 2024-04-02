function GameBoard() {
  let board = [];

  for (let i = 0; i < 3; i++) {
    board[i] = new Array(3);
  }

  let getBoard = () => board;

  let markBoard = (row, column, symbol) => {
    board[row][column] = symbol;
  }

  return {
    getBoard,
    markBoard
  }

}


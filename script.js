function GameBoard() {
  let board = [];

  for (let i = 0; i < 3; i++) {
    board[i] = new Array(3);
  }

  let getBoard = () => board;

  let markBoard = (row, column, symbol) => {
    if (!board[row][column]) {
      board[row][column] = symbol;
    }
  }

  let checkBoard = () => {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] == board[i][1] && board[i][1] == board[i][2]) {
        return board[i][0];
      } else if (board[0][i] == board[1][i] && board[1][i] == board[2][i]) {
        return board[0][i];
      }
    }

    if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
      return board[0][0];
    } else if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
      return board[1][1];
    } 

    return undefined;
  }

  let cmarker = 'O';
  let marker = () => {
    if (cmarker == 'O') {
      cmarker = 'X';
    } else {
      cmarker = 'O';
    }
    return cmarker;
  }

  let reseter = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        board[i][j] = undefined;
      }
    }
  };

  return {
    getBoard,
    markBoard,
    checkBoard,
    marker,
    reseter
  }
}

const gameboard = GameBoard();
const board = document.querySelector('.board-container');
const winner = document.querySelector('dialog');
const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
  winner.close();
  gameboard.reseter();
  let cells = Array.from(document.querySelectorAll('.cell'));
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
  }
});

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');

    cell.addEventListener('click', () => {
      gameboard.markBoard(i, j, gameboard.marker());
      cell.textContent = gameboard.getBoard()[i][j];
      if (gameboard.checkBoard()) {
        winner.showModal();
      }
    });

    board.appendChild(cell);
  }
}


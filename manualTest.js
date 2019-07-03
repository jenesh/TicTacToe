let ticTacToe = {
  board: [
      [" "," "," "],
      [" "," "," "],
      [" "," "," "],
    ],
  playerSymbol: "",
  computerSymbol: "",
  boardEmpty: function () {
    this.board = [
        [" "," "," "],
        [" "," "," "],
        [" "," "," "],
      ]
  },
  boardSet: function() {
    let board = [" "," "," "];
    let border = ["__|__|__"];
    for(let i = 0; i < size; i++) {
      this.board[i] += this.board[i].join(' | ');
      // console.log(this.board[i]);
      console.log('___|___|___');
    }
  },
  boardSetSize: function (size = 3) {
    let arr = [];
    for(let j = 0; j < size; j++) {
      arr.push("|", "  "), "\n";
    }
    for (let i = 0; i < size; i++) {
      console.log(arr);
    }
  },
};

// ticTacToe.boardSet();
// console.log(ticTacToe.board);
// ticTacToe.board = ticTacToe.boardSetSize()
// console.log(ticTacToe.board);
// (ticTacToe.board).forEach( (arr) => {
//   console.log(arr);
// })

let board = [
  ["   ", "   ", "   "],
  ["- -", "- -", "- -"],
  ["   ", "   ", "   "],
  ["- -", "- -", "- -"],
  ["   ", "   ", "   "],
]
// board[2][1] = " X "

function move (row, column, letter) {
  board[row][column] = ` ${letter} `;
  for(let i = 0; i < board.length; i++) {
    console.log(board[i].join(" | "));
  }
}

// move(0, 1, "X")
// console.log("----------------")

console.log(Math.floor(Math.random()*100))
const colors = require('colors');
const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// TicTacToe game object which includes empty board, player & computer
// symbols,
let ticTacToe = {
  nameOne: "Player 1",
  board: [
    [" 1 ", " 2 ", " 3 "],
    ["- -", "- -", "- -"],
    [" 4 ", " 5 ", " 6 "],
    ["- -", "- -", "- -"],
    [" 7 ", " 8 ", " 9 "],
  ],
  playerSymbol: "",
  computerSymbol: "",
  positionTracker: [1,2,3,4,5,6,7,8,9],
  positionUpdater: function(position) {
    this.positionTracker = this.positionTracker.filter(num => num != position);
  },
  // boardClear:
  //   this.board = [
  //   ["   ", "   ", "   "],
  //   ["- -", "- -", "- -"],
  //   ["   ", "   ", "   "],
  //   ["- -", "- -", "- -"],
  //   ["   ", "   ", "   "],
  //   ],
  displayBoard: function() {
    for(let i = 0; i < this.board.length; i++) {
      console.log(this.board[i].join(' | '));
    }
  },
  // Move using position
  makeMove: function (position) {
    if (position == 1) {
      this.board[0][0] = ` ${this.playerSymbol} `;
    } else if (position == 2) {
      this.board[0][1] = ` ${this.playerSymbol} `;
    } else if (position == 3) {
      this.board[0][2] = ` ${this.playerSymbol} `;
    } else if (position == 4) {
      this.board[2][0] = ` ${this.playerSymbol} `;
    } else if (position == 5) {
      this.board[2][1] = ` ${this.playerSymbol} `;
    } else if (position == 6) {
      this.board[2][2] = ` ${this.playerSymbol} `;
    } else if (position == 7) {
      this.board[4][0] = ` ${this.playerSymbol} `;
    } else if (position == 8) {
      this.board[4][1] = ` ${this.playerSymbol} `;
    } else if (position == 9) {
      this.board[4][2] = ` ${this.playerSymbol} `;
    }
    this.positionUpdater(position);
    ticTacToe.displayBoard();
  },
  // Computer position works
  computerPositionGenerator:  function(position){
    let computerPosition = position;
    let row = Math.floor(Math.random()*5);
    let column = Math.floor(Math.random()*3);

    if(row === 0 && column === 0) {
      computerPosition = 1;
    } else if (row === 0 && column === 1) {
      computerPosition = 2;
    } else if (row === 0 && column === 2) {
      computerPosition = 3;
    } else if (row === 2 && column === 0) {
      computerPosition = 4;
    } else if (row === 2 && column === 1) {
      computerPosition = 5;
    } else if (row === 2 && column === 2) {
      computerPosition = 6;
    } else if (row === 4 && column === 0) {
      computerPosition = 7;
    } else if (row === 4 && column === 1) {
      computerPosition = 8;
    } else if (row === 4 && column === 2) {
      computerPosition = 9;
    } 
    if(ticTacToe.positionTracker.includes(computerPosition)) {
      this.positionUpdater(computerPosition);
      return computerPosition;
    } else {
      return ticTacToe.computerPositionGenerator(position);
    }
  },
  userPositionChecker: function (position) {
    ticTacToe.positionUpdater(position);
    if(!ticTacToe.positionTracker.includes(position)) {
      rl.question("Invalide make another move\n".red, (newPosition) => {
        // ticTacToe.positionUpdater(newPosition);
        ticTacToe.userPositionChecker(newPosition);
        // if (!ticTacToe.positionTracker.includes(newPosition)){
          
        // } else {
        //   position = newPosition;
        // }
      })
    }
  }
};
// Conditions Work for both
function winConditionPlayer(){
  let b = ticTacToe.board;
  let p = ticTacToe.playerSymbol;
  if(b[0][0] === ` ${p} ` && b[0][1] === ` ${p} ` && b[0][2] === ` ${p} `) {
    return true;
  } else if (b[2][0] === ` ${p} ` && b[2][1] === ` ${p} ` && b[2][2] === ` ${p} `) {
    return true;
  } else if (b[4][0] === ` ${p} ` && b[4][1] === ` ${p} ` && b[4][2] === ` ${p} `) {
    return true;
  } else if (b[0][0] === ` ${p} ` && b[2][0] === ` ${p} ` && b[4][0] === ` ${p} `) {
    return true;
  } else if (b[0][1] === ` ${p} ` && b[2][1] === ` ${p} ` && b[4][1] === ` ${p} `) {
    return true;
  } else if (b[0][2] === ` ${p} ` && b[2][2] === ` ${p} ` && b[4][2] === ` ${p} `) {
    return true;
  } else if (b[0][0] === ` ${p} ` && b[2][1] === ` ${p} ` && b[4][2] === ` ${p} `) {
    return true;
  } else if (b[0][2] === ` ${p} ` && b[2][1] === ` ${p} ` && b[4][0] === ` ${p} `) {
    return true;
  }
};

function winConditionComputer(){
  let b = ticTacToe.board;
  let p = ticTacToe.computerSymbol;
  if(b[0][0] === ` ${p} ` && b[0][1] === ` ${p} ` && b[0][2] === ` ${p} `) {
    return true;
  } else if (b[2][0] === ` ${p} ` && b[2][1] === ` ${p} ` && b[2][2] === ` ${p} `) {
    return true;
  } else if (b[4][0] === ` ${p} ` && b[4][1] === ` ${p} ` && b[4][2] === ` ${p} `) {
    return true;
  } else if (b[0][0] === ` ${p} ` && b[2][0] === ` ${p} ` && b[4][0] === ` ${p} `) {
    return true;
  } else if (b[0][1] === ` ${p} ` && b[2][1] === ` ${p} ` && b[4][1] === ` ${p} `) {
    return true;
  } else if (b[0][2] === ` ${p} ` && b[2][2] === ` ${p} ` && b[4][2] === ` ${p} `) {
    return true;
  } else if (b[0][0] === ` ${p} ` && b[2][1] === ` ${p} ` && b[4][2] === ` ${p} `) {
    return true;
  } else if (b[0][2] === ` ${p} ` && b[2][1] === ` ${p} ` && b[4][0] === ` ${p} `) {
    return true;
  }
}

// Program begins by user picking either X or O
// The computer becomes the other symbol automatically
rl.question('Choose X or O? '.bold, (symbol) => {
  if (symbol === "x") {
    symbol = 'X';
  } else if (symbol === 'o'){
    symbol = 'O';
  }
  ticTacToe.playerSymbol = symbol.green;
  console.log(ticTacToe.displayBoard());

  if (symbol === "X") {
    ticTacToe.computerSymbol = "O".red;
  } else {
    ticTacToe.computerSymbol = "X".red;
  }
// Displaying the symbol for both the user and the computer
  console.log(`You: ${ticTacToe.playerSymbol}\nComputer: ${ticTacToe.computerSymbol}`);
// Asking user where they want to place their chosen symbol
  rl.setPrompt(`Choose a number to place ${ticTacToe.playerSymbol}?`);
  rl.prompt();
  let count = 1;
  // Make to function recursive
  rl.on('line', (position) => {
    // ticTacToe.userPositionChecker(position);
    ticTacToe.makeMove(position);
    console.log(`You moved to => ${position}`);

    if(winConditionPlayer()) {
      console.log("Yay, You win!".green.bold.inverse);
      rl.close();
    } else if (winConditionComputer()) {
      console.log("Sorry, you lose. Better luck next time.".red.bold.inverse);
      rl.close();
    } else if (ticTacToe.positionTracker.length === 0) {
      console.log("This game is a tie, better luck next game!");
      rl.close();
    } else {
      rl.setPrompt("Make your next move");
      rl.prompt();
    }

    if (ticTacToe.positionTracker.length === 0) {
      console.log("This game is a tie, better luck next game!");
      rl.close();
    }

    let computerPosition = ticTacToe.computerPositionGenerator(position);
    // ticTacToe.computerPositionGenerator(computerPosition);
    console.log("Computer Position => " + computerPosition);

      if (computerPosition == 1 && ticTacToe.board !== ` ${ticTacToe.playerSymbol} ` && ticTacToe.board !== ` ${ticTacToe.computerSymbol} `) {
        ticTacToe.board[0][0] = ` ${ticTacToe.computerSymbol} `;
      } else if (computerPosition == 2 && ticTacToe.board !== ` ${ticTacToe.playerSymbol} ` && ticTacToe.board !== ` ${ticTacToe.computerSymbol} `) {
        ticTacToe.board[0][1] = ` ${ticTacToe.computerSymbol} `;
      } else if (computerPosition == 3 && ticTacToe.board !== ` ${ticTacToe.playerSymbol} ` && ticTacToe.board !== ` ${ticTacToe.computerSymbol} `) {
        ticTacToe.board[0][2] = ` ${ticTacToe.computerSymbol} `;
      } else if (computerPosition == 4 && ticTacToe.board !== ` ${ticTacToe.playerSymbol} ` && ticTacToe.board !== ` ${ticTacToe.computerSymbol} `) {
        ticTacToe.board[2][0] = ` ${ticTacToe.computerSymbol} `;
      } else if (computerPosition == 5 && ticTacToe.board !== ` ${ticTacToe.playerSymbol} ` && ticTacToe.board !== ` ${ticTacToe.computerSymbol} `) {
        ticTacToe.board[2][1] = ` ${ticTacToe.computerSymbol} `;
      } else if (computerPosition == 6 && ticTacToe.board !== ` ${ticTacToe.playerSymbol} ` && ticTacToe.board !== ` ${ticTacToe.computerSymbol} `) {
        ticTacToe.board[2][2] = ` ${ticTacToe.computerSymbol} `;
      } else if (computerPosition == 7 && ticTacToe.board !== ` ${ticTacToe.playerSymbol} ` && ticTacToe.board !== ` ${ticTacToe.computerSymbol} `) {
        ticTacToe.board[4][0] = ` ${ticTacToe.computerSymbol} `;
      } else if (computerPosition == 8 && ticTacToe.board !== ` ${ticTacToe.playerSymbol} ` && ticTacToe.board !== ` ${ticTacToe.computerSymbol} `) {
        ticTacToe.board[4][1] = ` ${ticTacToe.computerSymbol} `;
      } else if (computerPosition == 9 && ticTacToe.board !== ` ${ticTacToe.playerSymbol} ` && ticTacToe.board !== ` ${ticTacToe.computerSymbol} `) {
        ticTacToe.board[4][2] = ` ${ticTacToe.computerSymbol} `;
      }

      ticTacToe.displayBoard();

    console.log(`Computer moved to: ${computerPosition}`);
    console.log("Turn: " + count);
    console.log(ticTacToe.positionTracker);
    count++;
    if (ticTacToe.positionTracker.length === 0) {
      console.log("This game is a tie, better luck next game!");
      rl.close();
    } else if(winConditionPlayer()) {
      console.log("Yay, You win!".green.inverse.bold);
      rl.close();
    } else if (winConditionComputer()) {
      console.log("Sorry, you lose. Better luck next time.".red.inverse.bold);
      rl.close();
    } else {
      rl.setPrompt("Make your next move");
      rl.prompt();
    }
  });
});

rl.on('close', () => {
  console.log('Good Bye!');
  process.exit();
})

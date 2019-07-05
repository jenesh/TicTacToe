# TicTacToe 

Who knew a simple game of Tic-Tac-Toe where you choose either an `'X'` or an `'O'` and get three of them in a row would be so complicated to code. One of the main challenges of this project was figuring out how to use readline and continuously asking the user for an input. 

![NodeJS](https://cdn-images-1.medium.com/max/1600/1*q9ww_u32hhpMaA-Q_s1ujw.png)

> You can check out the documentation for the Node module Readline [here](https://nodejs.org/api/readline.html)

## Game Plan going in
![Expectation](https://media.giphy.com/media/qmEboC2VVjBgQ/giphy.gif)
> For the first iteration of the game these were what came to mind.
* Object with methods
* User can choose to be either `'X'` or `'O'`
* Computer is automatically the second option and makes its own moves
* When the user or computer wins the game ends

## What happened in reality
![Reality](https://media.giphy.com/media/EimNpKJpihLY4/giphy.gif)
> The code got pretty messy..
* Objects with some methods 
* Bugs with the computer and player making unique moves (illegal moves)
* Messy repeated code (breaking the [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) rule)

## Early Problems
* Making [readline](https://nodejs.org/api/readline.html) work and making it take inputs
* Figuring out how to display and modify a board
* Computer making a random move after user input
* Making win conditions for both user and computer that ends the game

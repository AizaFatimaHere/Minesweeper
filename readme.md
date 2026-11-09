# Minesweeper

A small Minesweeper game with a Windows 95-style interface, built with HTML, CSS and vanilla JavaScript.

## Play

[Open the live game](https://aizafatimahere.github.io/minesweeper/)

## How to play

Choose a difficulty to start a new board:

- **Easy:** 9 x 9 board with 10 mines
- **Medium:** 16 x 16 board with 40 mines
- **Hard:** 30 x 30 board with 160 mines

Click a square to reveal it. The number on a revealed square tells you how many mines are in the surrounding squares. Use **Shift + Click** to place or remove a flag where you think a mine is hidden.

Reveal every square that does not contain a mine to win. Clicking a mine ends the game. The timer starts with your first move, and the face button resets the board.

## Built with

- HTML
- CSS
- JavaScript

The board is created in JavaScript, with each square represented by a `Cell` object. The game places mines randomly, counts nearby mines, reveals empty areas, tracks flags, and checks whether the player has won.

The styling is based on the classic Windows 95 version of Minesweeper, including the grey buttons, status display, pixel-style numbers and desktop-like colors.

## Running locally

Download or clone the project, then open `index.html` in a browser. The project uses jQuery from its CDN for the page setup, so an internet connection is needed to load that library.

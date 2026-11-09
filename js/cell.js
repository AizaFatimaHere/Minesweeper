class  Cell {
    constructor(row, col, board) {
        this.row = row;
        this.col = col;
        this.bomb = false;
        this.board = board;
        this.revealed = false;
        this.flagged = false;
    }

    getAdjCells() {
        var adjacentCells = [];
        var lastRow = board.length - 1;
        var lastCol = board[0].length - 1;
        if (this.row > 0 && this.col > 0) adjacentCells.push(board[this.row - 1][this.col - 1]);
        if (this.row > 0) adjacentCells.push(board[this.row - 1][this.col]);
        if (this.row > 0 && this.col < lastCol) adjacentCells.push(board[this.row - 1][this.col + 1]);
        if (this.col < lastCol) adjacentCells.push(board[this.row][this.col + 1]);
        if (this.row < lastRow && this.col < lastCol) adjacentCells.push(board[this.row + 1][this.col + 1]);
        if (this.row < lastRow) adjacentCells.push(board[this.row + 1][this.col]);
        if (this.row < lastRow && this.col > 0) adjacentCells.push(board[this.row + 1][this.col - 1]);
        if (this.col > 0) adjacentCells.push(board[this.row][this.col - 1]);       
        return adjacentCells;
    }

    calcAdjBombs() {
        var nearbyCells = this.getAdjCells();
        var adjBombs = nearbyCells.reduce(function(acc, cell) {
            return acc + (cell.bomb ? 1 : 0);
        }, 0);
        this.adjBombs = adjBombs;
    }

    flag() {
        if (!this.revealed) {
            this.flagged = !this.flagged;
            return this.flagged;
        }
    }

    reveal() {
        if (this.revealed && !hitBomb) return;
        this.revealed = true;
        if (this.bomb) return true;
        if (this.adjBombs === 0) {
            var adj = this.getAdjCells();
            adj.forEach(function(cell){
                if (!cell.revealed) cell.reveal();
            });
        }
        return false;
    }
}
class Ship {
    constructor(length){
        this.length = length
        this.hits = 0
        this.isSunk = false
    }

    hit(){
        this.hits++
        return {
            hits: this.hits
        }
    }

    sunkCheck(){
        if(this.hits === this.length){
            this.isSunk = true
        }
        return {
            isSunk: this.isSunk
        }
    }

}
export class Gameboard {
    constructor(board){
        this.board = this.newBoard()
    }

    newBoard(){
        const board = []
        for(let i = 0; i<10; i++){
            board.push([''])
        }

        for(let i = 0; i<board.length; i++){
            for (let j = 0; j < board.length-1; j++) {
                board[i].push([''])
                
            }
        }

        return board
    }

    placeShip(y,x,shipLength){
        this.board[y-1][x-1] = 'X'
        return this.board
    }

}

export let boat = new Ship(1)
let game = new Gameboard()
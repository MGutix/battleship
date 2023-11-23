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
            board.push([])
        }

        for(let i = 0; i<board.length; i++){
            board[i].push([], [], [], [], [], [], [], [], [], [])
        }

        return board
    }
}

export let boat = new Ship(1)
export let game = new Gameboard([[[],[]],[[],[]]])
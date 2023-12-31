import { boat, Gameboard } from "./script";

test('Creates class', () => {
    expect(boat).toMatchObject({"hits": 0, "isSunk": false, "length": 1})
})

test('Hits boat', () => {
    expect(boat.hit()).toMatchObject({"hits": 1})
})

test('Checks if sunk', () => {
    expect(boat.sunkCheck()).toMatchObject({"isSunk": true})
})

test('Checks if the board is 10x10', () => {
    const game = new Gameboard();
    const expectedRowCount = 10;
    const expectedColumnCount = 10;
  
    expect(game.board.length).toBe(expectedRowCount);
  
    game.board.forEach(row => {
      expect(row.length).toBe(expectedColumnCount);
    });
});

test('Checks if places X on tile', () => {
const game = new Gameboard();
const x = 2
const y = 3
const board = game.placeShip(y,x,1)


expect(board[y-1][x-1]).toBe('X')
});

test('Checks if places row of X', () => {
    const game = new Gameboard();
    const x = 2
    const y = 3
    const shipSize = 4
    const board = game.placeShip(y,x,shipSize)
    
    
    expect(board[y-1][x-1]).toBe('X')
    expect(board[y-1][x]).toBe('X')
    expect(board[y-1][x+1]).toBe('X')
    expect(board[y-1][x+2]).toBe('X')
});

test('Hits water || Hits boat', () => {
    const game = new Gameboard();
    const x = 2
    const y = 3
    const shipSize = 4
    game.placeShip(y,x,shipSize)
    const boat = game.receiveAttack(y,x)
    const water = game.receiveAttack(6,3)
    
    
    expect(boat[y-1][x-1]).toBe('O')
    expect(water[6-1][3-1]).toBe('W')
});
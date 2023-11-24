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
const board = game.placeShip(y,x)


expect(board[y-1][x-1]).toBe('X')
});


import { boat, game, Gameboard } from "./script";

test('Creates class', () => {
    expect(boat).toMatchObject({"hits": 0, "isSunk": false, "length": 1})
})

test('Hits boat', () => {
    expect(boat.hit()).toMatchObject({"hits": 1})
})

test('Checks if sunk', () => {
    expect(boat.sunkCheck()).toMatchObject({"isSunk": true})
})

test('Checks new Board', () => {
    expect(game.board).toMatchObject([[[],[]],[[],[]]])
})
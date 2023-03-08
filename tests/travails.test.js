import { knightMoves } from '../travails.js';

describe("Knight's Travails", () => {
  it('should return an empty array if start and end are the same', () => {
    expect(knightMoves([0, 0], [0, 0])).toEqual([]);
  });

  it('should return a path array from start to end', () => {
    expect(knightMoves([0, 0], [3, 3])).toEqual([
      [0, 0],
      [1, 2],
      [3, 3],
    ]);
    expect(knightMoves([7, 7], [2, 2])).toEqual([
      [7, 7],
      [5, 6],
      [3, 5],
      [1, 4],
      [2, 2],
    ]);
    expect(knightMoves([1, 1], [6, 6])).toEqual([
      [1, 1],
      [2, 3],
      [3, 5],
      [4, 7],
      [6, 6],
    ]);
    expect(knightMoves([5, 5], [0, 0])).toEqual([
      [5, 5],
      [3, 6],
      [2, 4],
      [1, 2],
      [0, 0],
    ]);
  });

  it('should return an empty array if end position is outside the board', () => {
    expect(knightMoves([0, 0], [8, 8])).toEqual([]);
    expect(knightMoves([2, 2], [10, 10])).toEqual([]);
  });

  it('should return an empty array if start position is outside the board', () => {
    expect(knightMoves([10, 10], [7, 7])).toEqual([]);
    expect(knightMoves([2, 2], [-1, -1])).toEqual([]);
  });

  it('should return an empty array if start and end positions are not valid chess board positions', () => {
    expect(knightMoves([-1, 0], [8, 2])).toEqual([]);
    expect(knightMoves([3, -3], [3, 8])).toEqual([]);
    expect(knightMoves([-1, -1], [8, 8])).toEqual([]);
  });
});

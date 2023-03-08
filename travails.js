export default class Node {
  constructor(pos, path) {
    this.pos = pos;
    this.path = path;
  }
}

const KNIGHT_MOVES = [
  [1, 2],
  [2, 1],
  [-1, 2],
  [-2, 1],
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1],
];

const isValidPos = (pos) => {
  const [x, y] = pos;
  if (x <= 7 && x >= 0 && y <= 7 && y >= 0) {
    return true;
  }
  return false;
};

const getValidMoves = (currentPos) => {
  const validMoves = [];
  for (let pos of KNIGHT_MOVES) {
    const x = currentPos[0] + pos[0];
    const y = currentPos[1] + pos[1];
    if (isValidPos([x, y])) {
      validMoves.push([x, y]);
    }
  }
  return validMoves;
};

const isTargetPos = (pos, target) => {
  return pos[0] === target[0] && pos[1] === target[1];
};

const knightMoves = (start, end) => {
  if (isTargetPos(start, end)) {
    return [];
  }
  if (!isValidPos(start) || !isValidPos(end)) {
    return [];
  }
  const queue = [new Node(start, [start])];
  while (queue.length > 0) {
    let curPos = queue.shift();
    if (isTargetPos(curPos.pos, end)) {
      return curPos.path;
    }
    for (let possibleMove of getValidMoves(curPos.pos)) {
      let p = new Node(possibleMove, [...curPos.path, possibleMove]);
      queue.push(p);
    }
  }
};

export { knightMoves };

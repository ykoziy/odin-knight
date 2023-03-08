import { knightMoves } from './travails.js';

const result = knightMoves([3, 3], [4, 3]);
console.log(`You made it in ${result.length - 1} moves!  Here's your path:`);
result.forEach((item) => console.log(item));

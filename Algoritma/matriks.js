var Matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

// diagonal pertama = 1 + 5 + 9 = 15
let diagonalPertama = Matrix[0][0] + Matrix[1][1] + Matrix[2][2];
// diagonal kedua = 0 + 5 + 7 = 12
let diagonalKedua = Matrix[0][2] + Matrix[1][1] + Matrix[2][0];

let result = diagonalPertama - diagonalKedua;
console.log(result);

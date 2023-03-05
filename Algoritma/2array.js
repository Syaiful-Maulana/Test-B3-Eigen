var INPUT = ['xc', 'dz', 'bbb', 'dz'];
var QUERY = ['bbb', 'ac', 'dz'];

function compare(INPUT, QUERY) {
  let result1 = [];
  let result2 = [];
  let result3 = [];

  INPUT.forEach((e1) => {
    if (QUERY[0] == e1) {
      result1.push(e1);
    }
    if (QUERY[1] == e1) {
      result2.push(e1);
    }
    if (QUERY[2] == e1) {
      result3.push(e1);
    }
  });
  const newArr = [result1.length, result2.length, result3.length];

  return newArr;
}
INPUT.sort();
console.log(compare(INPUT, QUERY));

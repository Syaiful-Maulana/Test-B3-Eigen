function reverseString(str) {
  const reverse = str.split('').reverse();
  const arr = reverse.shift();
  reverse.push(arr);

  const finish = reverse.join('');
  return finish;
}
console.log(reverseString('NEGIE1'));

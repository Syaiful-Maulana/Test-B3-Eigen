function sentence(str) {
  var t = 0;
  var ts = str.split(' ');
  for (var i = 0; i < ts.length; i++) {
    if (ts[i].length > t) {
      str = ts[i];
      t = ts[i].length;
    }
  }
  return str;
}
console.log(sentence('Saya sangat senang mengerjakan soal algoritma'));

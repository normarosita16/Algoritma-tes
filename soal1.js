// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan
// angka tetap diakhir kata Hasil = "EIGEN1"

const ReverseAlphabet = (alphabet) => {
  var str = alphabet;
  var convert = str.split("");
  var number = [];
  var alpha = [];

  for (i = 0; i < convert.length; i++) {
    if (isNumber(convert[i])) {
      number.push(convert[i]);
    } else {
      alpha.push(convert[i]);
    }
  }

  var resultalpha = alpha.reverse().join("");
  var resultnumb = number.join("");
  var result = resultalpha.concat(resultnumb);

  return result;
};

function isNumber(char) {
  if (typeof char !== "string") {
    return false;
  }

  if (char.trim() === "") {
    return false;
  }

  return !isNaN(char);
}

console.log(ReverseAlphabet("NEGIE1"));
//OUTPUT "EIGEN1"

module.exports = {
  ReverseAlphabet,
};

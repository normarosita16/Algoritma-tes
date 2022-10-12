//Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut,
// jika ada kata dengan panjang yang sama silahkan ambil salah satu

const LongestSentence = (sentence) => {
  var sntnc = sentence;
  var convert = sntnc.split(" ");
  var longest = 0;
  var longdex;

  for (i = 0; i < convert.length; i++) {
    if (convert[i].length > longest) {
      longdex = convert[i];
      longest = convert[i].length;
    }
  }

  var data = longdex + " : " + longest + " character";

  return data;
};

console.log(LongestSentence("Saya sangat senang mengerjakan soal algoritma"));
//OUTPUT mengerjakan : 11 character

module.exports = {
  LongestSentence,
};

// Terdapat dua buah array yaitu array INPUT dan array QUERY,
// silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

const CountQuery = (args_input, args_query) => {
  var input = args_input;
  var query = args_query;
  var count = 0;
  var samecount = 0;
  var counter = [];

  for (i = 0; i < query.length; i++) {
    for (j = 0; j < input.length; j++) {
      console.log(query[i]);
      console.log(input[j]);
      if (query[i] === input[j]) {
        count = samecount;
        samecount = count + 1;
      }
    }
    counter.push(samecount);
  }

  return counter;
};

console.log(CountQuery(["xc", "dz", "bbb", "dz"], ["bbb", "ac", "dz"]));
//OUTPUT [1, 1, 3]

module.exports = {
  CountQuery,
};

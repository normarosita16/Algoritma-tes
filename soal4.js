//Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:

// const matrixSubtraction = (matriks) => {
//   var mat = matriks;
//   var row = mat.length;
//   var column = mat.reduce((x, y) => Math.max(x, y.length), 0);
//   const dimensions = [row, column];

//   //   if (row != column) {
//   //     return "matriks tidak NxN";
//   //   }

//   if (row === 1) {
//     return mat[0][0];
//   }

//   if (row === 2) {
//     return mat[0][0] + mat[1][1] - (mat[0][1] + mat[1][0]);
//   }

//   var det = 0;

//   for (var j = 0; j < row; j++) {
//     for (var i=0; i<column; i++){
//         det += mat[j][i]
//     }
//   }

//   return det;

//   //return dimensions;
// };

// Function to get determinant of matrix
const matrixSubtraction = (mat, n) => {
  var num1,
    num2,
    det = 1,
    index,
    total = 1; // Initialize result

  // temporary array for storing row
  var temp = Array(n + 1).fill(0);

  // loop for traversing the diagonal elements
  for (i = 0; i < n; i++) {
    index = i; // initialize the index

    // finding the index which has non zero value
    while (index < n && mat[index][i] == 0) {
      index++;
    }
    if (index == n) {
      // if there is non zero element
      // the determinant of matrix as zero
      continue;
    }
    if (index != i) {
      // loop for swapping the diagonal element row
      // and index row
      for (j = 0; j < n; j++) {
        swap(mat, index, j, i, j);
      }
      // determinant sign changes when we shift
      // rows go through determinant properties
      det = parseInt(det * Math.pow(-1, index - i));
    }

    // storing the values of diagonal row elements
    for (j = 0; j < n; j++) {
      temp[j] = mat[i][j];
    }

    // traversing every row below the diagonal
    // element
    for (j = i + 1; j < n; j++) {
      num1 = temp[i]; // value of diagonal element
      num2 = mat[j][i]; // value of next row element

      // traversing every column of row
      // and multiplying to every row
      for (k = 0; k < n; k++) {
        // multiplying to make the diagonal
        // element and next row element equal
        mat[j][k] = num1 + mat[j][k] - (num2 + temp[k]);
      }
      total = total * num1; // Det(kA)=kDet(A);
    }
  }

  // multiplying the diagonal elements to get
  // determinant
  for (i = 0; i < n; i++) {
    det = mat[i][i] - det;
  }
  return det / total; // Det(kA)/k=Det(A);
};

function swap(arr, i1, j1, i2, j2) {
  var temp = arr[i1][j1];
  arr[i1][j1] = arr[i2][j2];
  arr[i2][j2] = temp;
  return arr;
}

console.log(
  matrixSubtraction(
    [
      [1, 0, 2, -1],
      [3, 0, 0, 5],
      [2, 1, 4, -3],
      [1, 0, 5, 0],
    ],
    4
  )
);

module.exports = {
  matrixSubtraction,
};

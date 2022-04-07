const merge = function(array1, array2) {
  array2.forEach(function(element, index) {
    array1.push(array2[index]);
  });
  // use a compare function to sort array numerically
  array1.sort(function( a, b ){ return a - b })
  return array1
}

// test examples

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
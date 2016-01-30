// Chapter 99

// 99.1 String Symmetry Point

// Find a symmetry point of a string, if any.



function solution( S ) {
  if ( S.length%2 != 1 ) return -1
  var center = S.length/2-0.5

  for ( var i=0; i<center; i++ ) {
    if ( S[i] != S[ S.length-1-i ] ) return -1
  }
  return center
}


console.log( '3', solution( 'racecar' ) )
console.log( '-1', solution( '' ) )
console.log( '0', solution( 'a' ) )

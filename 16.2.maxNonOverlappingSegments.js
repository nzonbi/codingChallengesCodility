// Chapter 16: Greedy algorithms

// 16.2 Max non overlapping segments.

// Find a maximal set of non-overlapping segments.


function solution(A, B) {
  var end = -1, count = 0
  for ( var i=0; i<A.length; i++ ) {

    if ( A[i] > end ) {
      end = B[i]
      count++
    }

  }
  return count
}


var sol = solution( [0,2,2,5,6], [3,4,5,7,8] )
console.log( 'sol:', sol )

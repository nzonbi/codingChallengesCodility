// Chapter 16: Greedy algorithms

// 16.1 Tie ropes

// Tie adjacent ropes to achieve the maximum number of ropes of length >= K.


function solution(K, A) {

  var bundle = 0, count = 0

  for (var i=0; i<A.length; i++) {
    if (bundle < K) bundle += A[i]
    else bundle = A[i]

    if (bundle >= K) count++
  }
  return count
}



//var sol = solution(3, [1,4,2,3,6,3,2,1,4,1])
//var sol = solution(4, [1, 2, 3, 4, 1, 1, 3])
var sol = solution(2, [1, 1, 2, 3, 1, 1])

console.log('sol:', sol)

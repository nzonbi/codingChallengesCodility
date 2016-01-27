// Number Of Disc Intersections

function intersect(cen1,rad1,cen2,rad2) {
  var d1from = cen1-rad1
  var d1to = cen1+rad1

  var d2from = cen2-rad2
  var d2to = cen2+rad2

  if (d1from < d2from) {
    if (d1to >= d2from) return true
  } else if (d1from > d2from) {
    if (d1from <= d2to) return true
  } else if (d1from == d2from)
    return true

  return false
}

/*
intersection tests

console.log( intersect(0,2,6,2), 'false' )
console.log( intersect(0,2,-6,2), 'false' )

console.log( intersect(0,2,1,2), 'true' )
console.log( intersect(0,2,-3,2), 'true' )
console.log( intersect(0,2,4,2), 'true' )
console.log( intersect(0,2,-4,2), 'true' )

console.log( intersect(0,2,1,4), 'true' )
console.log( intersect(0,2,1,0), 'true' )
*/

function solution(A) {
  if (A.length < 2) return 0
  var count = 0

  for (var i=0; i<A.length; i++) {
    var cen1 = i
    var rad1 = A[i]
    console.log('center1:',cen1,'rad1:',rad1)
    for (var j=1+i; j<A.length; j++){
      var cen2 = j
      var rad2 = A[j]
      var testInter = intersect(cen1,rad1,cen2,rad2)
      console.log('  center2:',cen2,'rad2:',rad2, 'inter:',testInter)
      if (testInter) count++
      if (count > 10000000) return -1
    }
  }

  return count
}

// sample calculations;
//var sol = solution([4,3,1,0,5,2,1]) // solution: 17
//var sol = solution([1,5,2,1,4,0]) // solution: 11
//console.log('sol:', sol)

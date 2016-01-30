// Chapter 99

// 99.2 Tree height

// Find a symmetry point of a string, if any.



function treeDeep( T ) {
  if ( T ) return 1 + Math.max( treeRec(T.l), treeRec(T.r) )
  return 0
}

function solution( T ) {
  return treeDeep( T ) - 1
}


var n1 = { x: 1 }
var n2 = { x: 2 }
var n3 = { x: 3 }
var n4 = { x: 4 }
var n5 = { x: 5 }
var n6 = { x: 6 }
n1.l = n2
n1.r = n3
n2.l = n4
n2.r = n5
n4.l = n6

var tree = n1
var sol = solution( n1 )
console.log( 'sol:', sol )

// Chapter 7: Stacks and Queues

// 7.3 Nesting

// Determine whether given string of parentheses is properly nested.


function solution(S) {

  var stack = []

  for (var i=0; i<S.length; i++) {
    var char = S[i]
    console.log('stack:', stack)
    console.log('char:', char)
    if ( char== '(' ) {
      console.log('( pushed to stack')
      stack.push( char )

    } else {
      var clos = stack.pop()
      if ( clos != '(' ) return 0
    }
  }
  if (stack.length>0) return 0
  else return 1
}


var sol = solution('(()(())())')
console.log('sol:', sol)

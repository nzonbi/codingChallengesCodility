// Chapter 7: Stacks and Queues

// 7.1 Brackets

// Determine whether a given string of parentheses is properly nested.

function solution(S) {

  var opening = { '{': true, '(': true, '[':true }
  var closing = {
    '}':'{',
    ')': '(',
    ']': '['
  }

  var stack = []

  for (var i=0; i<S.length; i++) {
    var char = S[i]
    if ( opening[char] ) stack.push( char )
    else if ( closing[char] ) {
      var clos = stack.pop()
      if ( clos != closing[char] ) return 0
    }
  }
  if (stack.length>0) return 0
  return 1
}


var sol = solution('{[()()]}')
console.log('sol:', sol)

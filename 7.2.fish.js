// Chapter 7: Stacks and Queues

// 7.2 Fish

// N voracious fish are moving along a river. Calculate how many fish are alive.

// 0 upstream
// 1 downstream

function solution(A, B) {

  // stack of fishes going downstream
  var downstreamStack = []

  // number of fishes going upstream that beat the stack and are safe
  var safe = 0

  // Calculate the outcome of a fish going agains the whole stack
  // Update stack size
  // Increment safe counter if the fish beats the stack and passes to safety
  function fightStack( size ) {
    var fighting = true

    while( fighting ) {
      if (!downstreamStack.length) {
        // fighting fish beats whole stack and passes to safety
        console.log('    fighting fish passes safely')
        safe++
        return
      }
      var top = downstreamStack[downstreamStack.length-1]
      if (top>size) {
        console.log('    fighting fish dies')
        fighting = false
      }
      else if (top<size){
        console.log('    stack fish dies')
        downstreamStack.pop()
      }

    }
  }


  for (var i=0; i<A.length; i++){

    var fish = A[i]
    console.log('fish:',i,'size:',A[i])
    var goingUp = B[i] == 0 ? true : false
    if (goingUp) {
      // fight all fishes in the downstream stack
      console.log('fight')
      fightStack()
    } else {
      // join the downstream stack
      console.log('go downstream')
      downstreamStack.push( A[i] )
    }

  }

  return downstreamStack.length + safe
}


var sol = solution([4,3,2,1,5], [0,1,0,0,0])
console.log('sol:', sol)

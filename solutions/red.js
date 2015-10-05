
function isRed(str) {
  if ( str.lastIndexOf('red') == -1) {
    return false
  }
  else {
    return true
  }
}

// Tests
output ( isRed( 'blue red green') )
output ( isRed( 'blue green') )

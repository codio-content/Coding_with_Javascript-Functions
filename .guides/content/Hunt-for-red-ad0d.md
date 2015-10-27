{Check It!|assessment}(test-1648558933)

|||guidance
### Solutions
```javascript
function isRed(str) {
  // lastIndexOf returns -1 if the string does not appear
  if ( str.lastIndexOf('red') == -1) {
    // 'red' does not appear in str
    return false
  }
  else {
    // 'red' does appear in str 
    return true
  }
}

// Tests
console.log ( isRed( 'blue red green') )
console.log ( isRed( 'blue green') )
```
|||
{Run the code}(node run-user red.js)

{Check It!|assessment}(test-1648558933)


|||guidance
### Solutions
```javascript
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
```
|||
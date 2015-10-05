{Run the code}(node run-user random-integer.js)

{Check It!|assessment}(test-1468068757)

|||guidance
### Solutions
```javascript
function randomInteger(min, max) {
  return Math.round( Math.random() * (max - min) ) + min
}

// Create a testing loop to make sure we are getting both 0 and 10 at the extremes
for (i=0; i < 50; i++ ) {
  output ( randomInteger(0, 10) )
}

// Try a couple of other different ranges
output ( randomInteger(100, 1000) )
output ( randomInteger(20, 30) )
```
|||
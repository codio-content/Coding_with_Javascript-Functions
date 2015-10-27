{Check It!|assessment}(test-1468068757)

|||guidance
### Solutions
```javascript
function randomInteger(min, max) {
  return Math.round( Math.random() * (max - min) ) + min
}

// Create a testing loop to make sure we are getting both 0 and 10 at the extremes
for (var i=0; i < 50; i++ ) {
  console.log ( randomInteger(0, 10) )
}

// Try a couple of other different ranges
console.log ( randomInteger(100, 1000) )
console.log ( randomInteger(20, 30) )
```
|||
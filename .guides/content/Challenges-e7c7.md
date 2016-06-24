Now you are ready to try some challenges and test your knowledge of functions.

## Testing your functions
In these challenges, you will write functions that will be called for you. You can test these out easily directly in your code as shown in the earlier example:

```javascript
// caclulate the volume of a cylinder
function volumeCylinder( radius, height ) {
  return Math.PI * radius * radius * height
}

console.log( 'r=10, h=20 => V=' + volumeCylinder( 10, 20 ) )
```

You can call your function anywhere outside the function as `value = volumeCylinder(10,20)` does above.


// caclulate the volume of a cylinder
function volumeCylinder( radius, height ) {
  var v = Math.PI * radius * radius * height
  return v
}

console.log ( 'r,   h  => V')
console.log ( '10,  20    ' + volumeCylinder( 10, 20 ) )
console.log ( '1,   10    ' + volumeCylinder( 1, 10 ) )
console.log ( '125, 2520  ' + volumeCylinder( 125, 2520 ) )


// caclulate the volume of a cylinder
function volumeCylinder( radius, height ) {
  var v = Math.PI * radius * radius * height
  return v
}

console.log ( 'r=10, h=20 => V=' + volumeCylinder( 10, 20 ) )
console.log ( 'r=1, h=10 => V=' + volumeCylinder( 1, 10 ) )
console.log ( 'r=125, h=2520 => V=' + volumeCylinder( 125, 2520 ) )

// calculate the area of a circle
function areaCircle(radius){
  return radius * radius
}

// calculate the volume of a cylinder
function volumeCylinder( radius, height ) {
  return Math.PI * areaCircle(radius) * height
}

// calculate the weight of a cylynder (per unit)
function weightCylinder( radius, height, weight ) {
  return volumeCylinder( radius, height ) * weight
}

var radius1= 2
var height1= 4
var weight1= weightCylinder(radius1, height1, 4) // calculate the weight
console.log( weight1 )

var radius2= 5
var height2= 7
var weight2= weightCylinder(radius2, height2, 6) // calculate the weight
console.log( weight2 )

var radius3= 1;
var height3= 35;
var weight3= weightCylinder(radius3, height3, 8) // calculate the weight
console.log( weight3 )





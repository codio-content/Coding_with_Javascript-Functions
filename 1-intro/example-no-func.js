
//
// FIRST ONE
// 
string1 = 'Frankie|c Mary and Johnny'
// isNan() checks if the field can be converted into a number
if ( isNaN( string1 ) || string1 == '') {
  // Not a number, so replace |c with ,
  while ( (pos = string1.indexOf('|c'))  != -1 ) {
    string1 = string1.substring(0, pos) + ',' + string1.substring(pos+2)
  }
  console.log( string1 )
}
else {
  // It can be converted into a number
  num1 = parseFloat( string1 )
  console.log( num1 )
}    

//
// SECOND ONE
// 
string2 = '12345'
// isNan() checks if the field can be converted into a number
if ( isNaN( string2 ) || string2 == '') {
  // Not a number, so replace |c with ,
  while ( (pos = string2.indexOf('|c'))  != -1 ) {
    string2 = string2.substring(0, pos) + ',' + string2.substring(pos+2)
  }
  console.log( string2 )
}
else {
  // It can be converted into a number
  num2 = parseFloat( string2 )
  console.log( num2 )
}    

// THIRD ONE
// 
string3 = 'Dog|c cat|c mouse'
// isNan() checks if the field can be converted into a number
if ( isNaN( string3 ) || string3 == '') {
  // Not a number, so replace |c with ,
  while ( (pos = string3.indexOf('|c'))  != -1 ) {
    string3 = string3.substring(0, pos) + ',' + string3.substring(pos+2)
  }
  console.log( string3 )
}
else {
  // It can be converted into a number
  num3 = parseFloat( string3 )
  console.log( num3 )  
}    

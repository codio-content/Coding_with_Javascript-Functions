function convertField(str) {
  
  // isNan() checks if the field can be converted into a number
  if ( isNaN( str ) || str == '') {
    // Not a number, so replace |c with ,
    while ( (pos = str.indexOf('|c'))  != -1 ) {
      str = str.substring(0, pos) + ',' + str.substring(pos+2)
    }
  }
  else {
    // It can be converted into a number
    str = parseFloat( str )
  }    
  return str
}

string1 = 'Frankie|c Mary and Johnny'
value = convertField( string1 )
console.log ( value )

string2 = '12345'
value = convertField( string2 )
console.log ( value )

string3 = 'Dog|c cat|c mouse'
value = convertField( string3 )
console.log ( value )


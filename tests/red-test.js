
var fs = require('fs');

var res = [];

function output() {
  // capture and ignore
}

try {
  var data = fs.readFileSync('/home/codio/workspace/challenges/red.js', 'UTF8');
  eval(data);  
   
  if(typeof isRed == 'function') {

    
    if(isRed('')) throw new Exception();
    if(isRed('asdasdasagasdgjsb f9sf udf9u 9dfvu df9 u099((()))')) throw new Exception();
    if(isRed('blue')) throw new Exception();
    if(!isRed('red')) throw new Exception();
    if(!isRed('ends with a word that is_red')) throw new Exception();
    
    console.log('Well done!');  
    process.exit(0);  
  }  

}
catch(e) {
  console.log(e) 
}

console.log('Not quite right, try again!');  
process.exit(1);

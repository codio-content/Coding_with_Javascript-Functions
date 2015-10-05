
var fs = require('fs');

var res = [];

function output() {
  // capture and ignore
}

try {
  var data = fs.readFileSync('/home/codio/workspace/random-integer.js', 'UTF8');
  eval(data);  
   
  if(typeof randomInteger == 'function') {
    var min = 10;
    var max = 20;
    var n = 100;

    for(var i = 0; i < n; i++) {
      res.push(randomInteger(min, max));
    }
    
//     console.log(res)
    
    if(res.length != n) throw new Exception();

    for(var i = 0; i < n; i++) {
      if(res[i] < min || res[i] > max) throw new Exception();
    }   
    
    console.log('Well done!');  
    process.exit(0);  
  }  

}
catch(e) {
  console.log(e) 
}

console.log('Not quite right, try again!');  
process.exit(1);

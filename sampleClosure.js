function sum(a) {

return function(b) {
    return a + b; // takes "a" from the outer lexical environment
  };

}

// method 1
console.log( sum(1)(2) ); // 3

/// method 2 

var call_1 = sum(1);
var call_2 = call_1(4);

console.log( call_2 ); // 5

var here = require('here').here;

var greeterContract  = here(
  /*
    contract greeter {
    function greet(bytes32 input) returns(bytes32) {
      if (input == "") {
        return "Hello, World";
      }
      return input;
    }
  }
              */
).unindent();

var greeter = {};
module.exports = greeter;

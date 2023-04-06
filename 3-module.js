// CommonJS (every file is module (by default)
//Modules -Encapsulate Code (only share minimum)

const names = require("./names");
const sayHi = require("./utils");
const data = require("./alternative-flavor");
require("./mind-granade");

// sayHi(names.john);
// sayHi(names.peter);
// sayHi("susan");
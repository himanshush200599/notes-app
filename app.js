console.log("app.js is starting ");
var _ = require("lodash");
var notes = require("./notes");
var arr = _.uniq([1,2,2,3,4,2,2,1,56,2]);
console.log(arr)

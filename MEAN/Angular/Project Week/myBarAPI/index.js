var package = require("./package.json");
var myBarApi = require("./lib/my_bar_api.js");
console.log("loaded " + package.name + ", version " + package.version);
exports.handler = function (event, context) {
myNewApi.handleRequest(event, context.done);
}

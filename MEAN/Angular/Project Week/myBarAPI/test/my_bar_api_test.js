var assert = require("chai").assert;var myBarAPI = require("../lib/my_bar_api.js");
describe("myBarApi", function () { it("exports handleRequest", function () { assert.typeOf(myBarApi.handleRequest, "function"); });});

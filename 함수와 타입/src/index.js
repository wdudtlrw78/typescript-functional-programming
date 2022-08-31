"use strict";
exports.__esModule = true;
var clip3_2_1 = require("./clip3-2");
console.log("test");
var app = document.getElementById("app");
if (app !== null) {
    app.innerHTML = "\n  <h1>Total price: ".concat(Math.round(clip3_2_1.totalPrice), "</h1>\n  ");
}
//# sourceMappingURL=index.js.map
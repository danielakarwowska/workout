"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_dom_1 = require("react-dom");
var App = function () {
    var hello = 'Hello World';
    return React.createElement("h1", null, hello);
};
var dom = document.querySelector('#app');
var root = react_dom_1.default.createRoot(dom);
root.render(App);

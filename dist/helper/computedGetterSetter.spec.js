"use strict";

var _computedGetterSetter = _interopRequireDefault(require("./computedGetterSetter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var myVar = (0, _computedGetterSetter["default"])('test');
test("check for computed getter for path \"test\"", function () {
  expect(_typeof(myVar.get)).toBe('function');
});
test("check for computed setter for path \"test\"", function () {
  expect(_typeof(myVar.set)).toBe('function');
});
test("check if computed setter accepts one parameter\"", function () {
  expect(myVar.set.length).toBe(1);
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mapSingleEntry;

var _computedGetterSetter = _interopRequireDefault(require("./computedGetterSetter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function mapSingleEntry(path, aliases) {
  // check parameter
  if (_typeof(aliases) !== 'object') throw Error('Wrong parameter');
  if (Object.keys(aliases).length > 1) throw Error('Wrong parameter'); // set alias and path

  var alias = Object.keys(aliases)[0];
  if (!path) path = aliases[alias];else path += ".".concat(aliases[alias]); // return computed getter and setter

  var returnObject = {};
  returnObject[alias] = (0, _computedGetterSetter["default"])(path);
  return returnObject;
}
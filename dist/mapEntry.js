"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mapEntry;

var _lodash = require("lodash");

var _mapSingleEntry = _interopRequireDefault(require("./helper/mapSingleEntry"));

var _normalizeParams = _interopRequireDefault(require("./helper/normalizeParams"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function mapEntry(path) {
  var aliases = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var options = (0, _normalizeParams["default"])(path, aliases); // init empty returnObject for computed getters and setters

  var returnObject = {};
  options.aliases.forEach(function (alias) {
    returnObject = _objectSpread({}, returnObject, (0, _mapSingleEntry["default"])(options.path, alias));
  });
  return returnObject;
}
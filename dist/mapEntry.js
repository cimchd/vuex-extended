"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mapEntry;

var _lodash = require("lodash");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function mapEntry(path, alias) {
  var returnObject = {};
  returnObject[alias] = {
    get: function get() {
      console.log('get');
      console.log(_objectSpread({}, this.$store.state));
      console.log("$store.state.".concat(path));
      return (0, _lodash.get)(this, "$store.state.".concat(path));
    },
    set: function set(value) {
      console.log('set');
      this.$store.commit('setEntry', [path, value]);
    }
  };
  return returnObject;
}
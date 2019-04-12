"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mapObject;

var _lodash = require("lodash");

function mapObject(path, alias) {
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var returnObject = {};
  returnObject[alias] = {
    get: function get() {
      return (0, _lodash.get)(this, "$store.state.".concat(path));
    },
    set: function set(value) {
      this.$store.commit('setEntry', [path, value]);
    }
  };
  return returnObject;
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mapEntry;

var _lodash = require("lodash");

function mapEntry(path, alias) {
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = computedGetterSetter;

var _lodash = require("lodash");

function computedGetterSetter(path) {
  return {
    get: function get() {
      return (0, _lodash.get)(this, "$store.state.".concat(path));
    },
    set: function set(value) {
      this.$store.commit('setEntry', [path, value]);
    }
  };
}
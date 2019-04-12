"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapEntry = exports.createSetEntryMutation = exports.createNamespacedHelpers = exports.mapState = exports.mapMutations = exports.mapGetters = exports.mapActions = void 0;

var _vuex = require("vuex");

var _createSetEntryMutation = _interopRequireDefault(require("./createSetEntryMutation"));

var _mapEntry = _interopRequireDefault(require("./mapEntry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import Vuex mapper
// additional mappers
// Vuex
var mapActions = _vuex.mapActions;
exports.mapActions = mapActions;
var mapGetters = _vuex.mapGetters;
exports.mapGetters = mapGetters;
var mapMutations = _vuex.mapMutations;
exports.mapMutations = mapMutations;
var mapState = _vuex.mapState;
exports.mapState = mapState;
var createNamespacedHelpers = _vuex.createNamespacedHelpers; // additional functions

exports.createNamespacedHelpers = createNamespacedHelpers;
var createSetEntryMutation = _createSetEntryMutation["default"];
exports.createSetEntryMutation = createSetEntryMutation;
var mapEntry = _mapEntry["default"];
exports.mapEntry = mapEntry;
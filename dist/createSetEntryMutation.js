"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _isIndex = _interopRequireDefault(require("./helper/isIndex"));

var _convertPathToDotNotation = _interopRequireDefault(require("./helper/convertPathToDotNotation"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = {
  setEntry: function setEntry(stateFromStore, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        pathParam = _ref2[0],
        value = _ref2[1];

    // check for right parameter syntax
    if (!(0, _lodash.isString)(pathParam)) throw Error('Wrong parameters in setEntry. Call it with an array of path and value.');
    var pathModified = (0, _convertPathToDotNotation["default"])(pathParam); // Split path

    var pathSplit = pathModified.split('.');
    var field = pathSplit.pop(); // Object

    var storeEntry = stateFromStore;

    _.forEach(pathSplit, function (key, index) {
      if (!storeEntry[key]) {
        // init empty objects
        if (pathSplit.length > index + 1 && (0, _isIndex["default"])(pathSplit[index + 1])) {
          _vue["default"].set(storeEntry, key, []);
        } else {
          _vue["default"].set(storeEntry, key, {});
        }
      }

      storeEntry = storeEntry[key];
    }); // set reactivity


    _vue["default"].set(storeEntry, field, value);
  }
};
exports["default"] = _default;
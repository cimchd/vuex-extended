"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = normalizeParams;

var _lodash = require("lodash");

var _convertPathToDotNotation = _interopRequireDefault(require("./convertPathToDotNotation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function normalizeParams(path, aliases) {
  // convert path to dot notation
  path = (0, _convertPathToDotNotation["default"])(path);
  var pathParts = path.split('.');
  var lastPart = pathParts[pathParts.length - 1]; // if no aliases are given, map only last entry of path

  if (!aliases) aliases = lastPart; // if only a string is given for aliases, assume it's a single alias

  if (typeof aliases === 'string') {
    var obj = {};
    obj[aliases] = lastPart;
    aliases = [obj]; // adjust path

    if (pathParts.length > 1) {
      pathParts.splice(-1, 1);
      path = pathParts.join('.');
    } else {
      path = '';
    }
  } // array is given
  else if ((0, _lodash.isArray)(aliases)) {
      // aliases is an array and should be ok, check if parameters are ok
      aliases.forEach(function (alias, index) {
        if ((0, _lodash.isObject)(alias)) {
          if (Object.keys(alias).length > 1) throw Error('Wrong parameter');
        } else if (typeof alias === 'string') {
          var _obj = {};
          _obj[alias] = alias;
          aliases[index] = _obj;
        } else {
          throw Error('wrong parameter');
        }
      });
    } else throw Error('wrong parameter');

  return {
    path: path,
    aliases: aliases
  };
}
"use strict";

var _convertPathToDotNotation = _interopRequireDefault(require("./convertPathToDotNotation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pathes = [{
  path: '',
  expectedResult: ''
}, {
  path: 'path.to.my.entry',
  expectedResult: 'path.to.my.entry'
}, {
  path: 'path/to/my/entry',
  expectedResult: 'path.to.my.entry'
}, {
  path: 'path["to"]["my"]["entry"]',
  expectedResult: 'path.to.my.entry'
}, {
  path: 'path/to["my"]/entry',
  expectedResult: 'path.to.my.entry'
}];
pathes.forEach(function (_ref) {
  var path = _ref.path,
      expectedResult = _ref.expectedResult;
  test("convert ".concat(path), function () {
    expect((0, _convertPathToDotNotation["default"])(path)).toBe(expectedResult);
  });
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = convertPathToDotNotation;

function convertPathToDotNotation(path) {
  // convert slash syntax to dot syntax
  var pathModified = path.replace(/\/"/g, '.'); // convert bracket syntax to dot syntax

  pathModified = pathModified.replace(/\["/g, '.');
  pathModified = pathModified.replace(/\['/g, '.');
  pathModified = pathModified.replace(/\[/g, '.');
  pathModified = pathModified.replace(/"]/g, '');
  pathModified = pathModified.replace(/']/g, '');
  pathModified = pathModified.replace(/]/g, '');
  return pathModified;
}
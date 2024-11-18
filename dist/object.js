"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objEqual = objEqual;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// 对比两个对象是否一致
function objEqual(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (var key in a) {
    if (b[key] === undefined) {
      return false;
    }
    if (typeof b[key] === "function" || typeof a[key] === "function") {
      throw new Error("type error");
    }
    if (_typeof(b[key]) != _typeof(a[key])) {
      return false;
    }
    if (_typeof(a[key]) === "object") {
      return this.objEqual(a[key], b[key]);
    }
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
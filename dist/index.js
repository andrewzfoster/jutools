"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "amountFormat", {
  enumerable: true,
  get: function get() {
    return toolUtils.amountFormat;
  }
});
Object.defineProperty(exports, "calculateCarousel", {
  enumerable: true,
  get: function get() {
    return arrayUtils.calculateCarousel;
  }
});
Object.defineProperty(exports, "checkFileType", {
  enumerable: true,
  get: function get() {
    return toolUtils.checkFileType;
  }
});
Object.defineProperty(exports, "cumNumberFromArrSameItem", {
  enumerable: true,
  get: function get() {
    return arrayUtils.cumNumberFromArrSameItem;
  }
});
Object.defineProperty(exports, "debounce", {
  enumerable: true,
  get: function get() {
    return toolUtils.debounce;
  }
});
Object.defineProperty(exports, "deepCopy", {
  enumerable: true,
  get: function get() {
    return toolUtils.deepCopy;
  }
});
exports["default"] = void 0;
Object.defineProperty(exports, "deleteCookie", {
  enumerable: true,
  get: function get() {
    return cookieUtils.deleteCookie;
  }
});
Object.defineProperty(exports, "downloadFile", {
  enumerable: true,
  get: function get() {
    return toolUtils.downloadFile;
  }
});
Object.defineProperty(exports, "exportFile", {
  enumerable: true,
  get: function get() {
    return toolUtils.exportFile;
  }
});
Object.defineProperty(exports, "getBase64", {
  enumerable: true,
  get: function get() {
    return toolUtils.getBase64;
  }
});
Object.defineProperty(exports, "getCookie", {
  enumerable: true,
  get: function get() {
    return cookieUtils.getCookie;
  }
});
Object.defineProperty(exports, "getDiffArr", {
  enumerable: true,
  get: function get() {
    return arrayUtils.getDiffArr;
  }
});
Object.defineProperty(exports, "getQueryParam", {
  enumerable: true,
  get: function get() {
    return toolUtils.getQueryParam;
  }
});
Object.defineProperty(exports, "mergeSameObj", {
  enumerable: true,
  get: function get() {
    return arrayUtils.mergeSameObj;
  }
});
Object.defineProperty(exports, "objEqual", {
  enumerable: true,
  get: function get() {
    return objectUtils.objEqual;
  }
});
Object.defineProperty(exports, "preLoadImg", {
  enumerable: true,
  get: function get() {
    return toolUtils.preLoadImg;
  }
});
Object.defineProperty(exports, "queueArr", {
  enumerable: true,
  get: function get() {
    return arrayUtils.queueArr;
  }
});
Object.defineProperty(exports, "randomNumber", {
  enumerable: true,
  get: function get() {
    return toolUtils.randomNumber;
  }
});
Object.defineProperty(exports, "randomString", {
  enumerable: true,
  get: function get() {
    return toolUtils.randomString;
  }
});
Object.defineProperty(exports, "setCookie", {
  enumerable: true,
  get: function get() {
    return cookieUtils.setCookie;
  }
});
Object.defineProperty(exports, "throttle", {
  enumerable: true,
  get: function get() {
    return toolUtils.throttle;
  }
});
Object.defineProperty(exports, "translateArray", {
  enumerable: true,
  get: function get() {
    return arrayUtils.translateArray;
  }
});
Object.defineProperty(exports, "visitDevice", {
  enumerable: true,
  get: function get() {
    return toolUtils.visitDevice;
  }
});
var arrayUtils = _interopRequireWildcard(require("./array"));
var cookieUtils = _interopRequireWildcard(require("./cookie"));
var objectUtils = _interopRequireWildcard(require("./object"));
var toolUtils = _interopRequireWildcard(require("./tool"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var awtool = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, arrayUtils), cookieUtils), objectUtils), toolUtils);
var _default = exports["default"] = awtool;
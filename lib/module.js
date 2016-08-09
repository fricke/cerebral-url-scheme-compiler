"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (url, fn, isGetter) {
  var moduleFn = function module(_ref) {
    var module = _ref.module;

    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }

    if (isGetter) {
      var _module$state;

      return (_module$state = module.state)[fn].apply(_module$state, [url.path].concat(values));
    } else {
      var _module$state2;

      (_module$state2 = module.state)[fn].apply(_module$state2, [url.path].concat(values));
      return values.length === 1 ? values[0] : values;
    }
  };
  moduleFn.displayName = "module." + fn;
  return moduleFn;
};
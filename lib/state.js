"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (url, fn, isGetter) {
  var stateFn = function state(_ref) {
    var state = _ref.state;

    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }

    if (isGetter) {
      return state[fn].apply(state, [url.path].concat(values));
    } else {
      state[fn].apply(state, [url.path].concat(values));
      return values.length === 1 ? values[0] : values;
    }
  };
  stateFn.displayName = "state." + fn;
  return stateFn;
};
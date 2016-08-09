'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compile;

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _output = require('./output');

var _output2 = _interopRequireDefault(_output);

var _state = require('./state');

var _state2 = _interopRequireDefault(_state);

var _module2 = require('./module');

var _module3 = _interopRequireDefault(_module2);

var _modules = require('./modules');

var _modules2 = _interopRequireDefault(_modules);

var _parseUrl = require('./parseUrl');

var _parseUrl2 = _interopRequireDefault(_parseUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function compile(path, fn, isGetter) {
  if (typeof path === 'string') {
    // check if the string is a url
    var url = (0, _parseUrl2.default)(path);
    if (url) {
      if (url.scheme === 'input' && fn === 'get') {
        return (0, _input2.default)(url);
      } else if (url.scheme === 'output' && fn === 'set') {
        return (0, _output2.default)(url);
      } else if (url.scheme === 'state') {
        return (0, _state2.default)(url, fn, isGetter);
      } else if (url.scheme === 'module') {
        return (0, _module3.default)(url, fn, isGetter);
      } else if (/^modules/.test(url.scheme)) {
        return (0, _modules2.default)(url, fn, isGetter);
      } else {
        return console.error(path + ' : not supported by input, output or state.' + fn);
      }
    }
  } else if (typeof path === 'function') {
    // for functions simply return them
    return path;
  }
  // other values (probably an array or non-url string) are passed through to state.fn
  var stateFn = function state(_ref) {
    var state = _ref.state;

    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }

    if (isGetter) {
      return path ? state[fn].apply(state, [path].concat(values)) : state[fn].apply(state, values);
    } else {
      if (path) {
        state[fn].apply(state, [path].concat(values));
      } else {
        state[fn].apply(state, values);
      }
      return values.length === 1 ? values[0] : values;
    }
  };
  stateFn.displayName = 'state.' + fn;
  return stateFn;
}
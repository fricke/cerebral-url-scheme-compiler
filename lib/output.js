'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = require('lodash/set');

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (url) {
  // add the value to the input object and pass it to output
  return function output(_ref, value) {
    var input = _ref.input;
    var output = _ref.output;

    var outputValue = value && typeof value.toJS === 'function' ? value.toJS() : value && value.constructor === Object && Object.isFrozen(value) ? JSON.parse(JSON.stringify(value)) : value;
    (0, _set2.default)(input, url.path, outputValue);
    output(input);
    return value;
  };
};
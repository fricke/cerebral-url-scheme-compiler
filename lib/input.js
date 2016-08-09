'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (url) {
  // get the value from the input object
  return function input(_ref) {
    var input = _ref.input;

    return (0, _get2.default)(input, url.path);
  };
};
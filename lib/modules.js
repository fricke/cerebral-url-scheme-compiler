'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var aliasRegex = /^modules\[(.+)\]$/;

exports.default = function (url, fn, isGetter) {
  var moduleAlias = url.scheme.match(aliasRegex)[1];
  if (!moduleAlias) throw new Error('modules[alias-name] pattern required.');
  var modulesFn = function modules(_ref) {
    var modules = _ref.modules;

    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }

    if (isGetter) {
      var _modules$moduleAlias$;

      return (_modules$moduleAlias$ = modules[moduleAlias].state)[fn].apply(_modules$moduleAlias$, [url.path].concat(values));
    } else {
      var _modules$moduleAlias$2;

      (_modules$moduleAlias$2 = modules[moduleAlias].state)[fn].apply(_modules$moduleAlias$2, [url.path].concat(values));
      return values.length === 1 ? values[0] : values;
    }
  };
  modulesFn.displayName = url.scheme + '.state.' + fn;
  return modulesFn;
};
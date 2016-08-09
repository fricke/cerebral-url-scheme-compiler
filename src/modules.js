const aliasRegex = /^modules\[(.+)\]$/;
export default (url, fn, isGetter) => {
  let moduleAlias = url.scheme.match(aliasRegex)[1];
  if(!moduleAlias) throw new Error('modules[alias-name] pattern required.');
  const modulesFn = function modules ({ modules }, ...values) {
    if (isGetter) {
      return modules[moduleAlias].state[fn](url.path, ...values)
    } else {
      modules[moduleAlias].state[fn](url.path, ...values)
      return values.length === 1 ? values[0] : values
    }
  }
  modulesFn.displayName = `${url.scheme}.state.${fn}`
  return modulesFn
}

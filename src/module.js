export default (url, fn, isGetter) => {
  const moduleFn = function module ({ module }, ...values) {
    if (isGetter) {
      return module.state[fn](url.path, ...values)
    } else {
      module.state[fn](url.path, ...values)
      return values.length === 1 ? values[0] : values
    }
  }
  moduleFn.displayName = `module.${fn}`
  return moduleFn
}

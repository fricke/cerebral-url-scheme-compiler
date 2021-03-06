import set from 'lodash/set'

export default (url) => {
  // add the value to the input object and pass it to output
  return function output ({ input, output }, value) {
    const outputValue = (value && typeof value.toJS === 'function')
      ? value.toJS()
      : (value && value.constructor === Object && Object.isFrozen(value))
        ? JSON.parse(JSON.stringify(value))
        : value
    set(input, url.path, outputValue)
    output(input)
    return value
  }
}

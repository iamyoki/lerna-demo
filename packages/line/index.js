const { add } = require('@stui/core')

// line is a lib
function line(...args) {
  return add(args)
}

// changed
// changed +1

console.log( line(1,2,3,4) )

module.exports = { line }

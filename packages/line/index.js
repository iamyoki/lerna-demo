const { add } = require('@stui/core')

// line is a lib
function line(...args) {
  return add(args, 'Very good')
}

console.log( line(1,2,3,4) )

module.exports = { line }

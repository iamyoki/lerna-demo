exports.add = function add(...args) {
  console.log( 'add calc' )
  return args.reduce((total, cur) => total + cur, 0)
}

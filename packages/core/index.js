exports.add = function add(...args) {
  return args.reduce((total, cur) => total + cur, 0)
}

// changed
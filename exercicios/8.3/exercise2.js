const assert = require('assert')

// escreva sum abaixo
// const sum = ( a = 0, ...args) => parseInt(a) + parseInt(args) ;

const sum = (...args) => args.reduce( (a , b)  => a + b , 0 );

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)

const assert = require('assert')
const mostCommon = require('./')

const fruits = ['apple', 'banana', 'carrot', 'apple']

describe('mostCommon', () => {
  it('should get most common item from an array', () => {
    assert.deepEqual(mostCommon(fruits), 'apple')
  })
})

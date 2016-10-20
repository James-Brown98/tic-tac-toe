var test = require('tape')
var calcWinner = require('../').calcWinner
var mapRows = require('../').mapRows
var isHorizontalWin = require('../').isHorizontalWin
var isDiagonalWin = require('../').isDiagonalWin
var isVerticalWin = require('../').isVerticalWin


test('test check', function (t){
  t.pass('passed')
  t.end()
})
// var game = [[0,4,0], [2,0,1], [3,0,0]]

test('check winner hor', function (t){
  var game = [[0,0,1], [0,0,1], [0,0,0]]
  var expected = true
  var actual = isHorizontalWin(game)
  t.equal(actual, expected, 'horz win')
  t.end()
})

test('check winner diagonal', function (t){
  var game = [[1,0,1], [0,1,1], [0,0,1]]
  var expected = true
  var actual = isDiagonalWin(game)
  t.equal(actual, expected, 'diagonal win')
  t.end()
})

test('check winner diagonal alt', function (t){
  var game = [[0,0,1], [0,1,1], [1,0,1]]
  var expected = true
  var actual = isDiagonalWin(game)
  t.equal(actual, expected, 'diagonal alt win')
  t.end()
})

test('check winner vert', function (t){
  var game = [[0,3,1], [0,5,1], [9,6,1]]
  var expected = true
  var actual = isVerticalWin(game)
  t.equal(actual, expected, 'vert win')
  t.end()
})
test('check winner', function (t){
  var game = [[6,7,1], [9,6,1], [1,6,6]]
  var expected = 6
  var actual = calcWinner(game)
  t.equal(actual, expected, '1 wins')
  t.end()
})

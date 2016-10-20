module.exports = {
  calcWinner: calcWinner,
  mapRows:mapRows,
  isHorizontalWin: isHorizontalWin,
  isDiagonalWin: isDiagonalWin,
  isVerticalWin: isVerticalWin
}
var rows = []
var collumns = []
var diagonals = []

function mapRows(game){
  return game.map(function(row){
    rows.push(row)
  })
}

function mapDiagonals(game){
  diagonals.push(new Array(3).fill(game[0][0], game[1][1], game[2][2]))
  diagonals.push(new Array(3).fill(game[0][2], game[1][1], game[2][0]))
  return diagonals
}

function calcWinner(game){
  if (isHorizontalWin(game) || isVerticalWin(game) || isDiagonalWin(game)){
    console.log('hoz');
    return winner
  }
  else{
    console.log('else');
    return winner
  }
}

function isHorizontalWin(game){
  mapRows(game)
  for (var i = 0; i < rows.length; i++) {
    if (rows[i][0] === rows[i][1] && rows[i][0]=== rows[i][2]){
      winner = rows[i][0]
      return true
    }
  }
}

function isVerticalWin(game){
  mapRows(game)
  for (var i = 0; i < rows.length; i++) {
    if (rows[0][i] === rows[1][i] && rows[0][i]=== rows[2][i]){
      winner = rows[0][i]
      return true
    }
  }
}

function isDiagonalWin(game){
  mapDiagonals(game)
  for (var i = 0; i < diagonals.length; i++) {
    if (diagonals[i][0] === diagonals[i][1] && diagonals[i][0]=== diagonals[i][2]){
      winner = diagonals[i][0]
      return true
    }
  }
}
function findWinValue(func){

}

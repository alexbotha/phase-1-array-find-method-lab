// code your solution here
function superbowlWin(element){

  let winYear = element.find(y => y.result === 'W')
  
  if (winYear === undefined){
    console.log(winYear)
    return winYear
  } else {
    console.log(winYear.year)
    return winYear.year;
  }
}

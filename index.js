// function superBowlWin(array) {
  
//   for (let item of array) {
//     if (item.result === "W") {
//       return item.year
//     }
//   }
// }
// superBowlWin(record)

// let superBowlWin = record.find(obj => obj.result === "W")
// console.log(superBowlWin)

function superbowlWin(record) {
  const yearWon = record.find(obj => obj.result === "W")
  return !!yearWon ? yearWon.year : undefined
}

 // if (yearWon.result === "W") {
  //   return yearWon.year
  // }
  // else if (yearWon.result === "L") {
  //   return undefined
  // }
  // else {
  //   return undefined
  // }
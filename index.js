const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
]

// function superbowlWin(stats) {
//   let obj = stats.find(o => o.result)

//   if (obj.result === "W") {
//     return obj.year
//   }
//   else {
//     return undefined
//   }

// }

function superbowlWin(record) {
  if (record.find (r => r.result === "W")){
    return (record.find (r => r.result === "W").year)
  }
  else {
    return (record.find (r => r.result === "W")) 
  }
}


console.log(superbowlWin(record))
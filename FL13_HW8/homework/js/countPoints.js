function countPoints(arr) {
   let sum = 0
   for (let key in arr) {
      let value = arr[key]
      let share = value.split("")
      let score1 = share[0]
      let score2 = share[2]
      if(score1 > score2){
         sum += 3
      }else if(score1 === score2){
         sum += 1
      }else {
         sum += 0
      }
   }
   return sum
}

countPoints()
function positiveSum(...numbers) { 
   let sum = 0

   for (let arg of numbers) {
      if(arg > 0){
         sum += arg
      }
   }
   return sum;
}

positiveSum()
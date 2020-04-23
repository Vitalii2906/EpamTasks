
let check = Number(window.prompt('Check number'))
let tip = Number(window.prompt('Tip %'))
let oneHundred = 100

if(typeof check === 'number' && typeof tip === 'number' && check >= 0 && tip >= 0 && tip <= oneHundred){
   let procent = tip / oneHundred
   let sumAmount = procent * check
   let sum = check + sumAmount 
   if(sum >= 0){
      window.alert(`
      Check number: ${check}
      Tip: ${tip}%
      Tip amount: ${sumAmount}
      Total sum to pay: ${sum}
      `)
   }
} else{
   alert('Invalid input data')
}

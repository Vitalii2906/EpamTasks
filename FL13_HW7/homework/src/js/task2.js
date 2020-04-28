let casino = window.confirm('Do you want to play a game?')
let two = 2, three = 3, five = 5, oneHundred = 100, minusOne = -1, four = 4
let pickNumber
let random
let maxWin = 100
let i = 0, win = 0
let attempt
let attemts = 3
let attemptMonay = 100
let superGame = false
let game = false
let checkNumber = 6
let attemtsNumb = Number(five)

if (casino !== false) {
   while (i <= Number(two)) {
      console.log(i)

      random = Math.floor(Math.random() * checkNumber)

      pickNumber = prompt(
         `
         Choose a roullet pocket number from 0 to ${attemtsNumb}
         Attemts left: ${attemts}
         Total prize: ${win}$
         Posible prize on current attempt: ${attemptMonay}$
         `
      )

      if(Number(pickNumber) !== random && pickNumber !== '' && pickNumber !== null){
         attemptMonay = attemptMonay / Number(two)
         attemts--
         i++
      }else if(Number(pickNumber) === random){
         win = win + attemptMonay
         superGame = confirm(`Congratulation, you won!   Your prize is: ${win} $. 'Do you want to continue?'`)
         if(superGame === true){
            superGame = true
            superGames()
         }else if(superGame === false){
            alert(`Thank you for your participation. Your prize is: ${win} $`)
            break
         }else if(superGame === true && pickNumber === null){
            alert(`Thank you for your participation. Your prize is: ${win} $`)
            break
         }
      }else{
         alert('You did not become a billionaire, but can.')
         break
      }

      if (i === Number(three)) {
         game = Boolean(confirm(
            `Thank you for your participation. Your prize is: ${win} $. Do you want to play again?`
         ))
         if(game === true){
            maxWin = Number(oneHundred)
            i = 0 
            win = 0
            attemts = Number(three)
            attemptMonay = Number(oneHundred)
         }else{
            alert('You did not become a billionaire, but can.')
            break
         }
      } 
   }

}else{
   alert('You did not become a billionaire, but can.')
}

function superGames(){
   if(superGame === true) {
         attemtsNumb = attemtsNumb + Number(five)
         checkNumber = checkNumber * Number(two)
         attemts = Number(three)
         i = 0
         maxWin = maxWin * Number(two)
         attemptMonay = maxWin 
   }else{
      alert(`Thank you for your participation. Your prize is: ${win} $`)
   }
}



let casino = window.confirm('Do you want to play a game?')
let two = 2
let three = 3
let five = 5
let pickNumber
let random
let maxWin = 100
let i = 0
let win = 0
let attempt
let attemts = 3
let attemptMonay = 100
let superGame = false
let checkNumber = 6
let attemtsNumb = 5


if (casino === true) {
   while (i <= Number(three)) {
      pickNumber = Number(prompt(
         `
         Choose a roullet pocket number from 0 to ${attemtsNumb}
         Attemts left: ${attemts}
         Total prize: ${win}$
         Posible prize on current attempt: ${attemptMonay}$
         `
      ))

      random = Math.floor(Math.random() * checkNumber)
      if(pickNumber !== random && pickNumber >= 0){
   
         attemptMonay = attemptMonay / Number(two)
         attemts--
         i++
         
         if (i === Number(three)) {
            alert(`Thank you for your participation. Your prize is: ${win} $`)
            break
         }
      }else if(pickNumber === random){
         win = win + attemptMonay
         alert(`Congratulation, you won!   Your prize is: ${win} $.`)
         superGame = confirm('Do you want to continue?')
         if(superGame === true){
            superGame = true
            superGames()
         }else if(i === Number(three) && superGame === true){
            alert(`Thank you for your participation. Your prize is: ${win} $`)
            break
         }else{
            alert(`Thank you for your participation. Your prize is: ${win} $`)
         }
      }else{
         alert('You did not become a billionaire, but can.')
         break
      }
   }
} else {
   alert('You did not become a billionaire, but can.')
}

function superGames(){
   switch(superGame) {
      case true:
      attemtsNumb = attemtsNumb + Number(five)
      checkNumber = checkNumber * Number(two)
      attemts = Number(three)
      console.log(attemts)
      i = 0
      maxWin = maxWin * Number(two)
      attemptMonay = maxWin
      break
      default: 
      alert(`Thank you for your participation. Your prize is: ${win} $`)
      break
   }
}



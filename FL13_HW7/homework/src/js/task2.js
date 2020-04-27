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
let attemtsNumb = Number(five)


if (casino === true) {
   while (i <= Number(three)) {
      pickNumber = prompt(
         `
         Choose a roullet pocket number from 0 to ${attemtsNumb}
         Attemts left: ${attemts}
         Total prize: ${win}$
         Posible prize on current attempt: ${attemptMonay}$
         `
      )

      random = Math.floor(Math.random() * checkNumber)
      if (i === Number(two)) {
         alert(`Thank you for your participation. Your prize is: ${win} $`)
         break
      } 
      if(Number(pickNumber) === random){
         win = win + attemptMonay
         alert(`Congratulation, you won!   Your prize is: ${win} $.`)
         superGame = confirm('Do you want to continue?')
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
      }else if(Number(pickNumber) !== random && pickNumber !== null){
         attemptMonay = attemptMonay / Number(two)
         attemts--
         i++
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
      i = 0
      maxWin = maxWin * Number(two)
      attemptMonay = maxWin
      break  
      default: 
      alert(`Thank you for your participation. Your prize is: ${win} $`)
      break
   }
}



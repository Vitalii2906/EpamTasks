let word = window.prompt('Write the word')
let two = 2

function middleLetters(str) {
   let arr = str.split('')
   while (arr.length > two) {
      arr.pop()
      arr.shift()
   }
   return arr.join('')
}


if(word.length !== 0 && word.trim() !== ''){
   alert(middleLetters(word))
}else{
   alert('Invalid value')
}



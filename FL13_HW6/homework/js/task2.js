let word = window.prompt('Write the word')
let two = 2

function middleWords(str) {
   let arr = str.split('')
   while (arr.length > two) {
      arr.pop()
      arr.shift()
   }
   return arr.join('')
}


if(word.length !== 0 && word.trim() !== ''){
   alert(middleWords(word))
}else{
   alert('Invalid value')
}



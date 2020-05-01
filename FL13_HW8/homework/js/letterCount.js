function letterCount(str, arg){ 
   let b = arg
   let a = str.split("")
   return a.filter(letter => letter === b).length
   
}

letterCount

let checkLogin = window.prompt('Login')
let checkPassword
let four = 4
let twenty = 20.00
let date = new Date();
let hours = date.getHours()



if(checkLogin){
   if(checkLogin !== 0 && checkLogin === 'User' || checkLogin === 'Admin'){
      checkPassword = prompt('Password')
      if( checkPassword === 'UserPass' ){
         if(hours < Number(twenty)){
            alert('Good day, dear User!')
         }else {
            alert('Good evening, dear User!')
         }
      }else if( checkPassword === 'AdminPas' ){
         if(hours < Number(twenty)){
            alert('Good day, dear Admin!')
         }else{
            alert('Good evening, dear Admin!')
         }
      }else{
         alert('Wrong password')
      }
   }else if(checkLogin.length > Number(four)){
      alert('I dont know any users')
   }else if(checkLogin.length <= Number(four)){
      alert('I don’t know you')
   }
}else{
   alert('Canceled.')
}


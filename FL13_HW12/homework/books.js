
let books = []


let book1 = {
   name: 'Good Story', 
   author: 'Janyfer',
   image: 
   new URL(
   'https://images.pexels.com/photos/404313/pexels-photo-404313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
   )
   ,
   plot: 'Very interesting book',
   newId: 1
}

let book2 = {
   name: 'Some Book', 
   author: 'Bob',
   image: 
   new URL(
   'https://images.pexels.com/photos/2954199/pexels-photo-2954199.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
   )
   ,
   plot: 'Hystorical book',
   newId: 2
}

let book3 = {
   name: 'Harry Potter', 
   author: 'Sarra',
   image: 
   new URL(
   'https://images.pexels.com/photos/3155367/pexels-photo-3155367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
   )
   ,
   plot: 'Fantasy',
   newId: 3
}

books.push(book1)
books.push(book2)
books.push(book3)



function changeArr(arr){
   let search = JSON.parse(window.localStorage.getItem('books'))
   if(search === null){
      window.localStorage.setItem('books', JSON.stringify(arr))
   }else{
      arr = JSON.parse(window.localStorage.getItem('books'))
      window.localStorage.setItem('books', JSON.stringify(arr))
   }
}





changeArr(books)


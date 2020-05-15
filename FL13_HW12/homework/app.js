const root = document.getElementById('root')
let fifty = 50, one = 1, hundred = 100, ten = 10, threeHundred = 300
let div
let books2 = JSON.parse(window.localStorage.getItem('books'))

console.log(books2)

let container1 = document.createElement('div')
container1.classList.add('container1')
let container2 = document.createElement('div')
container2.classList.add('container2')

let buttonAdd = document.createElement('button')
buttonAdd.classList.add('add')

buttonAdd.onclick = function(){
   let state = `Name`
   let title = `Author`
   let url = `index.html#add`
   history.pushState(state, title, url)
   form.className = 'active'
   previewBook.className = 'deactive'
   inputName.value = ''
   inputAuthor.value = ''
   inputPlot.value = ''
   inputImage.value = ''
   inputName.placeholder = 'Name'
   inputAuthor.placeholder = 'Author'
   inputPlot.placeholder = 'Plot'
   inputImage.placeholder = 'Image URL'
   save.onclick = function(){
      let newBook = {
         name: inputName.value,
         author: inputAuthor.value,
         plot: inputPlot.value,
         image: inputImage.value,
         newId: Math.random() * hundred
      }
      books2.push(newBook)
      window.localStorage.setItem('books', JSON.stringify(books2))
      form.className = 'deactive'
   }
}




container1.append(buttonAdd)
root.append(container1)
root.append(container2)


let img = document.createElement('img')
img = new Image(hundred, hundred)

let form = document.createElement('form')
let inputName = document.createElement('input')
let inputAuthor = document.createElement('input')
let inputImage = document.createElement('input')
let inputPlot = document.createElement('input')
let cancel = document.createElement('button')
cancel.innerHTML = 'Cancel'
let save = document.createElement('button')
save.innerHTML = 'Save'
form.append(inputName)
form.append(inputAuthor)
form.append(inputPlot)
form.append(inputImage)
form.append(cancel)
form.append(save)
container2.append(form)

let previewBook = document.createElement('div')
previewBook.classList.add('preview')
container2.prepend(previewBook)
let nameBook = document.createElement('h2')
let authorBook = document.createElement('i')
let plotBook = document.createElement('p')
let previewImage = img

previewBook.append(previewImage)
previewBook.append(nameBook)
previewBook.append(authorBook)
previewBook.append(plotBook)





books2.forEach(element => {
   function clickPre(){
      let state = `book_id: ${element.newId}`
      let title = `${element.name}`
      let url = `index.html?id=${element.newId}#preview`
      history.pushState(state, title, url)
   }
   div = document.createElement('div')
   div.classList.add('item')
   let h4 = document.createElement('h4')
   
   div.append(h4)
   let h4Click = document.createElement('a')
   h4Click.onclick = function(){
      clickPre()
   }
   
   h4Click.innerHTML = element.name
   
   h4Click.id = `h4click`
   h4.append(h4Click)

   div.id = element.newId


   let button = document.createElement('button')
   button.innerHTML = 'Edit'
   button.id = `edit`

   button.onclick = function(){
      let state = `book_id: ${element.newId}`
      let title = `${element.name}`
      let url = `index.html?id=${element.newId}#edit`
      history.pushState(state, title, url)
      
   }
   
   save.onclick = function(e){
      e.preventDefault()

      element.name = inputName.value
      element.author = inputAuthor.value
      element.plot = inputPlot.value
      element.image = inputImage.value

      window.localStorage.setItem('books', JSON.stringify(books2))

      previewBook.className = 'active'
      form.className = 'deactive'
      previewImage.src = element.image
      nameBook.innerHTML = element.name
      authorBook.innerHTML = element.author
      plotBook.innerHTML = element.plot

      clickPre()
      
      setTimeout(function(){
         alert('Book successfully updated')
      }, threeHundred)
   }

   cancel.onclick = function (){
      confirm('Discard changes?')
   }
   
   div.append(button)
   
   button.onclick = function (){
      form.className = 'active'
      previewBook.className = 'deactive'
      inputName.value = element.name
      inputAuthor.value = element.author
      inputPlot.value = element.plot
      inputImage.value = element.image
      
      
   }
   h4.onclick = function (){
      previewBook.className = 'active'
      form.className = 'deactive'
      previewImage.src = element.image
      nameBook.innerHTML = element.name
      authorBook.innerHTML = element.author
      plotBook.innerHTML = element.plot
   }
   

   container1.prepend(div)
   
})


//button add





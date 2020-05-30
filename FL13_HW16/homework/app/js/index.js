const baseUrl = 'http://localhost:3000'
const appContainer = document.getElementById('app-container')

const xhr = new XMLHttpRequest()
const STATUS = 200
const NUM = 2

const getUsers = () => {
   xhr.onload = function () {
      if (this.status === STATUS) {
         const load = document.getElementById('load')
         btn.classList.add('disabled')
         load.classList.add('downloaded')
         const users = JSON.parse(this.responseText)
         users.forEach(user => {
            root.innerHTML += `
         <form id="${user.id}" onsubmit={updeteForm(event)}>
            <label>${user.id}</label>
            <input type="text" value="${user.name}">
            <input type="text" value="${user.username}">
            <input type="submit" class="submit" value="Update">
            <input id="${user.id}" type="button" class="button" onclick={deleteForm(event)} value="Delete">
         </form>`
         })
      }
   }
   xhr.open('GET', baseUrl + '/users')
   xhr.send()
}

const listOfUsers = getUsers()

const loading = () => {
   return `<div id="load">
            <div class="loadingio-spinner-double-ring-psoeuf016v">
            <div class="ldio-pqpr4hvnjye"><div></div><div></div>`
}

appContainer.innerHTML = `
   <h1>Manage User App</h1>
   <form onsubmit={submitForm(event)}>
      <input type="text" placeholder="Name">
      <input type="text" placeholder="Full Name">
      <input id="btn" type="submit" value="Add New User">
   </form>
   <h2>List of Users</h2>
   <div id="root">${listOfUsers !== 'undefined' ? loading() : listOfUsers}</div>`

const btn = document.getElementById('btn')
const root = document.getElementById('root')

const serviceRequests = (method, address, setReqFirst, setReqSecond, body) => {
   xhr.open(method, baseUrl + '/users' + address)
   xhr.setRequestHeader(setReqFirst, setReqSecond)
   xhr.send(body)
   location.reload()
}

const submitForm = (event) => {
   event.preventDefault()
   const name = event.target.children[0].value
   const username = event.target.children[1].value
   const body = JSON.stringify({
      name,
      username
   })
   if (name !== '' && username !== '') {
      if (btn.className === 'disabled') {
         serviceRequests('POST', '', 'Content-Type', 'application/json', body)
      }
   } else {
      if (btn.className !== 'disabled') {
         return
      }
      alert('Please add Name and Full Name')
   }
}

const updeteForm = (event) => {
   event.preventDefault()
   const body = JSON.stringify({
      name: event.target.children[1].value,
      username: event.target.children[NUM].value
   })
   serviceRequests('PUT', `/${event.target.id}`, 'Content-Type', 'application/json', body)
}

const deleteForm = (event) => {
   serviceRequests('DELETE', `/${event.target.id}`, 'Authorization', 'admin', null)
}


function convert(...arg){
   let arr1 = [...arg]
   let arr = []
   let value
   for(let key in arr1){
      if (Object.prototype.hasOwnProperty.call(arr1, key)) {
         value = arr1[key]
         if (typeof value === 'string'){
            arr.push(Number(value))
         }else{
            arr.push(String(value))
         }
      }
   }
   return arr
}

function executeforEach(arr, func){
   for(let i = 0; i < arr.length; i++){
      func(arr[i])
   }
}

function mapArray(arr, func){
   let mapArr = []
   executeforEach(arr, function(el){
      mapArr.push(func(+el))
   })
   return mapArr
}

function filterArray(arr, func){
   let filterArr = []
   executeforEach(arr, function(el){
      let a = func(el)
      if(a === true){
         filterArr.push(+el)
      }
   })
   return filterArr
}

function containsValue(arr, item) {
   let check = 0 
   executeforEach(arr, function(el){
      if (el === item){
         check += 1
      }else{
         check += 0
      }
   }) 
   if(check > 0) {
      return true
   }else {
      return false
   }
}

function flipOver(str) {
   return str.split('').reverse().join('');
}


function makeListFromRange(arr){
   let rangeArr = arr
   let rangeArr1 = []
   let startArr = rangeArr[0]
   let finishArr = rangeArr[1]


   if (startArr !== undefined){
      rangeArr1.push(startArr)
   }

   for(let i = startArr; i < finishArr; i++){
      startArr++
      rangeArr1.push(startArr)
   }
   return rangeArr1
}

function getArrayOfKeys(arr, key){
   let newKeysArr = []
   executeforEach(arr, function(el){
      newKeysArr.push(el[key])
   })
   return newKeysArr
}

function substitute(arr){
   let subArr = []
   let ten = 10
   let twenty = 20
   mapArray(arr, function(el){
      if(el > Number(ten) && el < Number(twenty)){
         subArr.push('*')
      }else{
         subArr.push(el)
      }
   })
   return subArr
}

function getPastDay(currentDate, days) {
   let date = new Date(currentDate)
   let pastDate = new Date(date)

   pastDate.setDate(date.getDate() - days)
   return pastDate.getDate()
}

getPastDay()

function formatDate(time){
   const TEN = 10
   let min = time.getMinutes() < TEN ? '0' + time.getMinutes() : time.getMinutes()
   let hour = time.getHours() < TEN ? '0' + time.getHours() : time.getHours()

   return `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()}/${hour}:${min}`
}

formatDate()
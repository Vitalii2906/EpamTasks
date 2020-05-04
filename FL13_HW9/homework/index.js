
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

function executeforEach(arr, forEach){
   let numbers = arr
   let key
   let value
   
   for (key in numbers){
      if (Object.prototype.hasOwnProperty.call(numbers, key)){
         value = numbers[key]
         forEach(value)
      }
   }
}

function mapArray(arr, forEach){
   let mapArr = arr
   let value
   for(let key in mapArr){
      if (Object.prototype.hasOwnProperty.call(mapArr, key)) {
         value = Number(mapArr[key])
         if(typeof value === 'string'){
            value = Number(value)
         }
         return forEach(value)
      }
   }
}

function filterArray(arr, forEach){
   let filterArr = arr 
   let value
   for(let key in filterArr){
      if (Object.prototype.hasOwnProperty.call(filterArr, key)) {
         value = filterArr[key]
         forEach(value)
      }
   }
   let filterArr1 = filterArr.filter(forEach)
   return filterArr1
}

function containsValue(arr, item) {
   let newArr = arr
   let value
   for(let key in newArr){
      if (Object.prototype.hasOwnProperty.call(newArr, key)) {
         value = newArr[key]
         if(value === item){
            return true
         }else {
            return false
         }
      }
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

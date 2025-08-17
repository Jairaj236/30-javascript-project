
console.log("hello");
// array can be created in mutiple ways, in js it was not an fixed length not like other languages..

let num = [ 2, 3, 4, 6]

console.log(num);
// push() adding the elememt into last position of an array...
num.push(100);
num.push(101);
console.log(num);
 // shift methods removes first element of an array an return it back
console.log("@@",num.shift())
console.log(num);

console.log("@1",num.unshift())
console.log(num);


const res = num.pop();

console.log(res);


  let arr1 = new Array(3)
  console.log(arr1);
  
  let arr2 = new Array([5, 6, 7 ,8]) // [[]] the length of array is 1
  let arr3 = new Array(5, 6, 7 ,8) // the length of array is 4 
  
  console.log(arr2);
  
  let copArray = arr3.slice(); // it create an copy of an array. if we can pass the arguments, it returns without modefing the orginal array
  
  let portionCopy = arr3.slice(arr3.length-2,3);
  console.log(portionCopy);
  
  console.log(copArray);

  let dynamic = [];

  for(let i = 0; i <=5; i++){
    dynamic.push(i)
    console.log(dynamic)
  }

 // identifying is array or not

 console.log(Array.isArray([1,3]))
 console.log(Array.isArray({name : "jai", age : 23}))
 console.log(Array.isArray([]))
 console.log(Array.isArray(true))



  

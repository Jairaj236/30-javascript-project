
// var num1 = 10;
// let num = 20
// console.log(num1, num)

// function greet(){
//     var a = "hello";
//     let b = "hi";
//     const c = " hello hai";
//     console.log(a, b , c)
// }
// greet();
//     // console.log(a)

    // scope chaining   

    // let globeVar = "i am from outer varaiable ";

    // function outer(){
    //     let outerVar = "outer function scope";

    //     function inner(){
    //         let innerVar = "inner function var";
    //         console.log(globeVar,outerVar,innerVar)
    //     }

    //     inner();
    // }

    // outer();

// CLOSER

// function createAccount(balnce){
    
//     let amount = balnce

//     return function deposit(balnce){
//      amount = amount + balnce
//       console.log(amount)
//     }

// }
// const funn = createAccount(1000);
// funn(500)

// function createAccount(balance){
   
//     let amount = balance;
//     return {
//         deposit : function(balance){
//             amount = amount+balance;
//           console.log(amount)
//         },
//         widthdraw : function(balance){
//             amount = amount-balance;
//              console.log(amount)
//         }
//     }
// }

// const fnn = createAccount(5000);
 
// fnn.deposit(500);
// fnn.widthdraw(2000);
// fnn.widthdraw(2000);

// let arr = [1, 2, 3, 4, 6, 7, 12, 14, 15, 17];
// let target = 2;

// const resl = arraY(arr, target);
// console.log(resl);

// function arraY(arr, target) { // 12
//     let start = 0;
//     let end = arr.length - 1; // 9

//     while (start <= end) {  // 0 > 9 , 
//         let mid = Math.floor(start + (end - start) / 2);  // 4 , 1 +(9-1)/2 =5;

//         if (target > arr[mid]) { // 12 >arr[4] 6, 12 > arr[5]
//             start = mid + 1; // 1 2
//         } else if (target < arr[mid]) { 
//             end = mid - 1;
//         } else {
//             return mid; // found
//         }
//     }
//     return -1; // not found
// }

 let arr = [1,2, [3,4,[5,6],7],8];

// // console.log(arr.flat(3))
// function flatingArray(arr){
//     let res = []
//    for(let i = 0; i < arr.length; i++){
//     //   console.log("@", arr[i]); 
//     if(Array.isArray(arr[i])){
//       res = res.concat(flatingArray(arr[i]))       
//     }
//     else{
//         res.push(arr[i])
//         // console.log("@@@", arr[i]); 
//     }

//    }
//    return res
// }
// const reslut = flatingArray(arr)
// console.log(reslut)


function flatArray(arr, res=[]){
      for(let i = 0; i < arr.length; i++){
         
        if(Array.isArray(arr[i])){
            flatArray(arr[i], res)
        }
        else{
            res.push(arr[i])
        }

      }
      
    return res
}

const respone = flatArray(arr)
console.log(respone)

for(let i = 0; i < 5; i++){
   for(let j = 0; j < 4; j++){
      console.log("@@ row", i, j)
} 
}
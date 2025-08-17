// let num = 15;
// let count = 0;
//  for(let i = 1; i <= num; i++){
//     if(num%i === 0){
//         count++;
//     }
//      else{
//         console.log("not a prime");
        
//     }
//     if(count === 2){
//         console.log("it is an prime number")
//     }
   
//  }

// let word = "javascript";
// let rev = ""
// // console.log(word.split("").reverse().join(""))
// for(let i = word.length-1; i >= 0 ; i--){
//     console.log(word.charAt(i))
//     rev += word.charAt(i)
// }
// console.log(rev)

// const row = 5;

// for(let i =1; i <= row; i++){
//     let pattran = ""
//     for(let j =1; j<=i; j++){
//     pattran += "* "
//     }
//     console.log(pattran);
    
// }

// pyramid 
// let pyrmidRow = 5;

// for(let i =1; i <= pyrmidRow; i++){
//     let pattran = ""
//     for(let j =1; j<=pyrmidRow-i; j++){
//       pattran += " ";
//     }
//     for(let k =1; k<=i; k++){
//     pattran += "*";
//     }
//     console.log(pattran);
    
// }
// there real pyrmid print 1, 3, 5, 7 like this so

// const realPyrimdRow = 5;

// for(let i =1; i <= realPyrimdRow; i++){
 
//     let pattran = ""
//     for(let j =1; j <= realPyrimdRow -i; j++){
//      pattran += " ";
//     }
//     for(let j =1; j <= 2*i-1; j++){
//      pattran += "*";
//     }
//     console.log(pattran)
// }

// // muliplcation table

// let num = 9;
// for(let i =1; i <= 10; i++){
//      result = num*i;
//     console.log(`${num}X ${i} = ${result}`)
// }

//***  finding all the sum of odd number upt 1 to 1500

// wrong code
// for(let i =1; i <=1500; i++){
//     let oddSum = 0;
//     if(i%2 ===0){
//         return null;   // we have to use return inside the function only and we are defining the sum inside the loop its always initilazes the value with every iteration
//     }
//     else{
//     oddSum += i;
//     }
//     console.log(oddSum)
// }


// let oddSum = 0;

// for(let i =1; i <=1500; i++){
//     if(i%2 !== 0){
//      oddSum +=i;
//     }
// }
// console.log(oddSum)
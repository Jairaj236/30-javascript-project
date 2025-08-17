
// let user = {
//     name : "aaa",
//     age  : 40,
//     "is admin" : true,
//     "is movie lover" : false
// }

// console.log(user);
// // adding the values 

//  user.hobby = "singing";
// user["nikname"] = "cherry";
// user["is coder"] = true;

// // modifing the existing values
//  user.hobby = "dancing";
//  user["is movie lover"] = false;
 
//  // delete the property from an object


//  delete user.hobby;
//  delete user.name;
//  delete user["is admin"]

//  console.log(user);

function fetchDetails(url){
  
    try{
     
        if(!url.startsWith("https")){
            throw new Error("invalid")
        }
        
        console.log("sucess");
        
    }
    catch(err){
   console.log(err.message);
  
    }

}
fetchDetails("http://example.com");
fetchDetails("https://example.com");

let person = new Object();
console.log(person.name = "@@2")

person.name = "jai";

console.log(new Object())


console.log(person)
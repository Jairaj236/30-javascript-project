
const URL_PATH = "https://jsonplaceholder.typicode.com/users"
async function fetchUserDetails(){
      
    fetch(URL_PATH).then((res)=>{
        if(!res.ok){
            throw new Error("statuscode erro :", res.status)
        }
        return res.json()
    })
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err.message))    
}

fetchUserDetails()
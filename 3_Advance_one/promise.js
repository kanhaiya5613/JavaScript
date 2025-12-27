const promiseone = new Promise(function(resolve, reject){
    // Do an Async task
    // DB callls, cryptography
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
    
})

promiseone.then(function(){
    console.log("promise consumed");
    
})
 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved"); 
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"kanhaiya5613",email:"kk7077574@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"kanhaiya",password:"123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("your promise is either resolved or rejected")
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"kanhaiya",password:"123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error){
        console.log(error)
    }
}

consumePromiseFive()

// async function getInformation(){
//     try{
//         const response = await fetch('https://api.github.com/users/kanhaiya5613')
//         const data = await response.json()
//         console.log(data)
//     } catch(error){
//         console.log("Error occured")
//     }
// }
// getInformation()

fetch('https://api.github.com/users/kanhaiya5613')
.then((response) => {
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))

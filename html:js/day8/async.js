
//asynchronous function
//--> making a way for the other functions to execute first

//two-methods
//1)setTimeout(callBackFunction,Delay-time)
//2)setInterval(cbf,delay-time)
//present inside window object

/*window.setTimeout(() => {
    console.log("i am settimeout");
    
},5000)

window.setInterval(()=>{
    console.log("i am setinterval");
    
},3000);*/

/*function main(m,n){
    setTimeout(()=> {
        console.log(i);
        
    },3000)
}
main(1,"10")

function demo(){
    console.log("hello bo");
    
}
demo()*/

//PROMISE

//--> it is an object
//--> used to look after async function

//3-phase
//1)pending phase
//2)resolve/fulfill phase
//3)reject phase

//Syntax:
//new promise((resolve,reject)=> {
//    async-fun-code
//})
//.then(cbf)
//.catch(cbf)

/*let online = window.navigator.onLine
new Promise((resolve , reject) => {
    setTimeout(() => {
        if(online==true){
            return resolve()
        }else{
            return reject()
        }
    },5000)
})
.then(() => console.log("online..😀")
)
.catch(() => console.log("offline..🥹")
)*/

function main(m,n){
    new Promise((resolve,reject) =>{
        setTimeout(() =>{
            if(isNaN(m) || isNaN(n)){
                return reject()
            }
            for(let i=m;i<=n;i++){
                console.log(i);
                
            }
            return resolve()
        },5000)
    })
    .then(()=> console.log("promise is resolved")
    )
    .catch(() => console.log("error occurs")
    )
}
main(1,10)

//promise chaining
//using multiple then methods
//async and await is a keyword used to avoid promise chaining
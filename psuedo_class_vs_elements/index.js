
// const getData=async ()=>{
//     try{
//     let result=await fetch("https://jsonplaceholder.typicode.com/todos")
     
//     let res= await result.json()
//     console.log(res)
//     }
//     catch(e){
//       console.log(e)
//     }
//   }
//   getData()

// console.log(this)// window object

 var myVar= 30

//console.log(this.myVar)//30 because it is hoisted globally

function fun(){

console.log(myVar)
}
fun()

var obj={
    name:"albert",
    place:"banglore",
    fun: function(){
        console.log(this.name)
    }
}
obj.fun()
// var myVar = 100;

// function printMe() {

//   var myVar = 200;

//   alert("myVar = " + myVar); // 200

//   alert("this.myVar = " + this.myVar); // 100

// }

// printMe();
  
  function fun1(){
console.log(this)
  }
  fun1()


  //! IIFE

  // Define a global variable
const message = 'Hello, World!';

// Define an IIFE to create a local scope
(function() {
  // This code will not affect the global namespace
  const message = 'Hello, Local!';
  console.log(message);
})();
(()=>{
    const message= "hello local 2"
    console.log(message)
})()
// The global variable is still accessible outside the IIFE
console.log(message); // outputs: "Hello, World!"
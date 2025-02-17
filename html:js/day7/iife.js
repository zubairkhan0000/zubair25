(function(){
   console.log("hello"); 
})();

((a,b) => {
    console.log(a+b);
}
)(10,10);

(function demo(){
    console.log("hii");
})();

//array in js
//it is used to store data of different data types
//heterogeneous in js

//two ways 

//declaration way
let arr=[10,"hello",true,1n,undefined]
console.log(arr);
//using ne keyword
let arr1=new Array(10,20,30);
console.log(arr1);

//objects in javaScript
//used to store data in the form of key and value pair
let obj={
    name : "xyz",
    id : 1,
    arr : [1,2,3],
    demo : function()
           {
            console.log("hello");
           }
}
console.log(obj.name);
console.log(obj.id);
console.log(obj.arr);
obj.demo();

//using constructor function
//used to create object

function obj1(name,id){
    this.name=name;
    this.id=id;
}
let p1=new obj1("abc",1)
console.log(p1);
console.log(p1.id);
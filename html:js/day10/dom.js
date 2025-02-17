console.log(window);
console.log(window.document);
console.log(typeof document);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.title);
document.title="amazon";
console.log(document.body);

let link=document.links;
for(let i=0;i<link.length;i++){
    console.log(link[i]);
    link[i].className="demo";
    link[i].href="https://www.youtube.com"
    link[i].target="_blank"
    
}
//In direct access (methods in dom)
//1)document.getElementById("value");
//2)document.getElementsByClassName("value")
//3)document.getElementsByTagName("value")
//4)document.getElementsByName("value")
//5)document.querySelector("value")
//6)document.querySelectorAll("value")

let a=document.getElementById("demo")
console.log(a);
console.log(a.textContent);
a.textContent="batch-6"
console.log(a.textContent);
a.style.backgroundColor="pink"
a.style.textAlign="center"


let b=document.getElementsByClassName("demo1")
console.log(b);
console.log(b[0]);
console.log(b[0].textContent);
b[0].style.backgroundColor="skyblue"
b[1].style.backgroundColor="green"
console.log(b[1]);



let c= document.getElementsByTagName("p")
console.log(c);
console.log(c[1]);
c[1].style.color="violet"
c[1].textContent="hello"

let d= document.getElementsByName("demo2")
console.log(d);
console.log(d[1]);
d[1].style.backgroundColor="crimson"
console.log(d[0]);
d[0].style.backgroundColor="grey"

//document.querySelector()
//we have to pass value with css symbol.
//will return reference of the first element

let e=document.querySelector("#demo")
console.log(e);

let e1=document.querySelector(".demo")
console.log(e1);


//document.querySelectorAll()
//we have to pass value with css symbol.
//wil return reference in a node list

let f=document.querySelectorAll("#demo")
console.log(f);
console.log(f[0]);

let f1=document.querySelectorAll(".demo")
console.log(f1);
console.log(f1[0]);

//events in dom
//it is an action performed by end users on a web page

//types
//1)keyboard event
    //key up event
    //key down event
    //key press event
//2)mouse event
    //onmouse event
    //onmouse leave event
    //dbclick
//3)form event
    //input event
    //blur event
    //focus event
//4)pointer event
    //click event


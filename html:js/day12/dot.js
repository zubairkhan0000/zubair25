let a = document.createElement("h1");
console.log(a);
a.textContent = "hello bro";
document.body.appendChild(a);

a.style.color = "green";
a.style.backgroundColor = "red";
a.style.textAlign = "center";
a.style.border = "5px solid";

let div = document.createElement("div");
console.log(div);
document.body.appendChild(div); 
div.style.border = "5px solid";

let ol = document.createElement("ol");
console.log(ol);
div.appendChild(ol); 


let li1 = document.createElement("li");
console.log(li1);
li1.textContent = "React"; 
ol.appendChild(li1);

let li2 = document.createElement("li");
console.log(li2);
li2.textContent = "Node.js"; 
ol.appendChild(li2);

ol.setAttribute("type","1")

let table=document.createElement("table")
console.log(table);
document.body.appendChild(table)

let tr1= document.createElement("tr")
table.appendChild(tr1)

let td1=document.createElement("td")
console.log(td1);
td1.textContent="hello"
tr1.appendChild(td1)

let td2=document.createElement("td")
console.log(td2);
td2.textContent="hello"
tr1.appendChild(td2)

let td3=document.createElement("td")
console.log(td3);
td3.textContent="hello"
tr1.appendChild(td3)

let tr2= document.createElement("tr")
table.appendChild(tr2)

let td4=document.createElement("td")
console.log(td4);
td4.textContent="hello"
tr2.appendChild(td4)

let td5=document.createElement("td")
console.log(td5);
td5.textContent="hello"
tr2.appendChild(td5)

let td6=document.createElement("td")
console.log(td6);
td6.textContent="hello"
tr2.appendChild(td6)

table.setAttribute("border", "2px solid")
table.style.borderBlockColor="red"
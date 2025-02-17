/*let obj={
    name: "john",
    id:1,
    designation:"developer"

}
console.log(obj);
let obj1=JSON.stringify(obj)
console.log(obj1);

let obj2=JSON.parse(obj1)
console.log(obj2);*/

window.fetch("data.json")
  .then((data) => data.json()) // Added parentheses here to correctly parse the JSON
  .then((res) => {
    res.map((x) => {
      console.log(x);
      console.log(x.name);
      console.log(x.id);
      console.log(x.designation);
    });
  })
  .catch((error) => {
    console.error('Error:', error); // Add error handling
  });

/*function parent(){
    function child(){
        console.log("i am child function");
    }
    child()
}
parent()*/

/*var a=10;
let b=20;
function parent1(){
    var a="ehh";
    let b="bye";
    console.log(a);
    console.log(b);
    console.log(this.a);
    console.log(this.b);
}
parent1()*/

//lexical scope / scope-chain\
// the abilituy of js enginr search for variable in local scope if it is not available 
//it will start search in global scope

/*function main(){
    let a=10;
    function child(){
        console.log(a);
    }
    child()
}
main()*/

//clouser
//the binding of child function to the parent function is called clouser
//or
//the binding of child-fun lexical scope to the parent-fun is called clouser

//note: disadvantage of clouser memory wastage
//whenever we call the child function multiple times multiple times,clouser will 
//be created in heap area
function parent(){
    function child1(){
        console.log("iam child 1");
        function child1_1(){
            console.log("iam child 3");
        }
        return child1_1
    }
    function child2(){
        console.log("i am child 2");
    }
    return [child1,child2]
}
parent()[0]()()
parent()[1]()

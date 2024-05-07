//Todo List Program With JavaScript.

console.log(" Use 'add' to add items in the list \n Use 'del' to delete items from the List \n Use 'list' to see the List \n Use 'quit' to get out of the loop of List");

let todo=[];
let req=prompt("Please Enter Your Request :- add, del, list or quit to exit");
// console.log(req);
while(true){
    if(req=="add"){
        while(true){
            todo.push(prompt("Add"));
            //  console.log("added successfully");
            if(todo[todo.length-1]=="quit"){
                todo.pop();
                break;
            }
            console.log(todo);
        }
    }
    else if(req=="del"){
        todo.pop(alert("Deleted"));
        console.log(todo);
    }
    else if(req=="list"){
        console.log(todo);
    }
    else if(req=="quit"){
        break; 
    }
    else{
        console.log("Wrong Input");
    }
    req=prompt("Please Enter Your Request");
}

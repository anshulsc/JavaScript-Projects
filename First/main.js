// Model Section
// If localstorage has todos array, then use it.
// else use  the default array
let todos;

// Reterive localstorage
const savedtodos = JSON.parse(localStorage.getItem('todos'));
if(Array.isArray(savedtodos)){
    todos = savedtodos;
} else{
todos = [{
    title: 'Learn JavaScript',
    dueDate: '2022-06-29',
    id: 'id1' 
    },{
    title: 'Learn Console',
    dueDate: '2022-09-12',
    id: 'id2'
    }];

}



// Creates a todo
function createTodo(title,dueDate){
    const id = '' + new Date().getTime(); 
    todos.push({
        title: title,
        dueDate:dueDate,
        id : id
    });
    saveTodos();
}

// Deletes a todo
 function removeTodo(idtoDelete){
    todos = todos.filter(function(todo){
        if( todo.id === idtoDelete){
            return false;
        } else{
            return true;
        }
    }); 
    saveTodos();
}

// Saves Todo
function saveTodos()
{
     localStorage.setItem('todos', JSON.stringify(todos))
}

// View Section
function render(){
    const elementdiv = document.getElementById('todo-div');
    // reset our List
    elementdiv.innerHTML = "";

    todos.forEach(function(todo){
        const element = document.createElement('div');
        element.innerText = todo.title + " " + todo.dueDate ;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'X';
        deleteButton.style = 'margin-left: 12px;';
        deleteButton.onclick = deleteTodo
        deleteButton.id = todo.id;
        element.appendChild(deleteButton);

        element.style = 'margin-top: 10px;';
        elementdiv.appendChild(element);
    })
}

render();

// Controller
function addTodo(){
    const textBox = document.querySelector("#todo-input");
    const datePicker = document.querySelector("#date-picker");
    const dueDate = datePicker.value;
    const title = textBox.value; 

    createTodo(title,dueDate);
    render();   
}
function deleteTodo(event){
    const deleteButton = event.target;
    const idtoDelete = deleteButton.id;

    removeTodo(idtoDelete);
    render();
}


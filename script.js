let todoInput = document.querySelector(".input");
let todoBtn = document.querySelector(".btn");
// let showTodo = document.querySelector(".todo-container");

// let todoList = [];

// function generateUUID() {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//         let r = Math.random() * 16 | 0;
//         let v = c === 'x' ? r : (r & 0x3 | 0x8);
//         return v.toString(16);
//     });
// }

todoBtn.addEventListener("click", (e) => {
    console.log("clicked");
    
    // e.preventDefault();

//     let todo = todoInput.value.trim();

//     if (todo.length > 0) {
//         todoList.push({
//             id: generateUUID(),
//             todo: todo,
//             isCompleted: false
//         });

//         todoInput.value = "";
//         renderTodoList(todoList);
//     }
// });

// showTodo.addEventListener("click", (e) => {
//     let key = e.target.dataset.key;
//     let delTodoKey = e.target.dataset.todoKey;

//     if (key) {
//         todoList = todoList.map(todo => todo.id === key ? { ...todo, isCompleted: !todo.isCompleted }: todo
//         );
//     }

//     if (delTodoKey) {
//         todoList = todoList.filter(todo => todo.id !== delTodoKey);
//     }

//     renderTodoList(todoList);
// });

// function renderTodoList(todoList) {
//     showTodo.innerHTML = todoList
//         .map(({ id, todo, isCompleted }) => `
//             <div>
//                 <input 
//                     id="item-${id}" 
//                     type="checkbox" 
//                     data-key="${id}" 
//                     ${isCompleted ? "checked" : ""}
//                 >
                
//                 <label 
//                     for="item-${id}" 
//                     class="todo ${isCompleted ? "completed" : ""}" 
//                     data-key="${id}">
//                     ${todo}
//                 </label>

//                 <button data-todo-key="${id}">Delete</button>
//             </div>
//         `)
//         .join("");
// }

// renderTodoList(todoList);

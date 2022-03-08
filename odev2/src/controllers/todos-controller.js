const todos = require("../data/todos.json"); //data klasöründen todosu getir

getAllTodos = () =>{
    return todos; 
}

getTodosByUserId = (userId) =>{
    return todos.filter(todo=>todo.userId == userId);
}
module.exports = {getAllTodos,getTodosByUserId}; //getAllTodos dışarıya çıkartır


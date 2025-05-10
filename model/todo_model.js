//creating an empty todo array
let todos = [];

//initializing the id flag
let nextId = 1;


//sorting the finished and unfinished todos
exports.sortedTodos = () => {
    const open = todos.filter(i => !i.completed).sort((a, b) => a.id - b.id);
    const completed = todos.filter(i => i.completed).sort((a, b) => a.id - b.id);
    return [...open, ...completed]
};

//creating a todo
exports.addTodo = (text) => {
    const todo = {id: nextId++, text, completed: false, createdAt: new Date()}
    todos.push(todo);
    return todo;
};

//updating a todo
exports.updateTodo = (id, data) => {
    const todo = todos.find(t => t.id === id);
    if(!todo) return null;
    if(typeof data.text === 'string') todo.text = data.text;
    if(typeof data.completed === 'boolean') todo.completed = data.completed;
    return todo;
}

//deleting a todo
exports.deleteTodo = (id) => {
    const index = todos.findIndex(i => i.id === id);
    if(index === -1) return null;
    return todos.splice(index, 1)[0];
}

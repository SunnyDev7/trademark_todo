//importing our custom model package
const todoModel = require("../model/todo_model");

//get todos
exports.getTodos = (req, res) => {
  const todos = todoModel.sortedTodos();
  res.json(todos);
};

//create todo
exports.createTodo = (req, res) => {
    const { text } = req.body;
    if(!text) {
        return res.status(400).json({error: 'Text is required'});
    }
    const newTodo = todoModel.addTodo(text);
    res.status(201).json(newTodo);
}

//update todo
exports.updateTodo = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const updated = todoModel.updateTodo(id, req.body);

    if(!updated){
        return res.status(404).json({error: 'Todo not found'});
    }
    res.json(updated)
}

//delete todo
exports.deleteTodo = (req, res) => {
    const id = parseInt(req.params.id, 10)
    const deleted = todoModel.deleteTodo(id);

    if(!deleted) {
        return res.status(404).json({error: 'Todo not found'});
    }
    res.json(deleted);
}

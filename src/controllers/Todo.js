class Todo {

    //get all todos.
    async getTodos(){

        let results = await todo.catch(console.log());
        return results.rows;
        console.log(todo);
    };

    //create a todo.
    async createTodo(todo){

        await todo.catch(console.log);
        console.log(todo);

        return;        
    };

};

module.exports = Todo;
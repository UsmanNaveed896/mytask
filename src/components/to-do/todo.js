import React from 'react';
import './../to-do/todo.css';
export default () => {
    const [todos, setTodos] = React.useState([]);
    const [todo, setTodo] = React.useState("");
    const [todoEditing, setTodoEditing] = React.useState(null);
    const [editingText, setEditingText] = React.useState("");
    function handleSubmit(e) {
        e.preventDefault();
        let dup = [...todos]
        dup.push(todo)
        setTodos(dup)

    }
    const handleChange = (value) => {
        setTodo(value);
    }

    // React.useEffect(() => {
    //   const json = localStorage.getItem("todos");
    //   const loadedTodos = JSON.parse(json);
    //   if (loadedTodos) {
    //     setTodos(loadedTodos);
    //   }
    // }, []);

    // React.useEffect(() => {
    //   const json = JSON.stringify(todos);
    //   localStorage.setItem("todos", json);
    // }, [todos]);



    // function deleteTodo(id) {
    //   let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    //   setTodos(updatedTodos);
    // }

    // function toggleComplete(id) {
    //   let updatedTodos = [...todos].map((todo) => {
    //     if (todo.id === id) {
    //       todo.completed = !todo.completed;
    //     }
    //     return todo;
    //   });
    //   setTodos(updatedTodos);
    // }

    // function submitEdits(id) {
    //   const updatedTodos = [...todos].map((todo) => {
    //     if (todo.id === id) {
    //       todo.text = editingText;
    //     }
    //     return todo;
    //   });
    //   setTodos(updatedTodos);
    //   setTodoEditing(null);
    // }
    console.log("todos", todos)
    return (
        <>
            <div id="todo-list">
                <h1>Todo List</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text" onChange={(e) => { handleChange(e.target.value) }}
                    />
                    <button type="submit">Add Todo</button>
                </form>
                {todos && todos.length !== 0 && todos.map(single =>
                    <div className="todo">
                        <div className="todo-text">
                            <input
                                type="checkbox"
                                id="completed"
                                checked={todo.completed}
                            />
                            {todo.id === todoEditing ? (
                                <input
                                    type="text"
                                />
                            ) : (
                                <div></div>
                            )}
                        </div>
                        <div className="todo-actions">
                            {todo.id === todoEditing ? (
                                <button>Submit Edits</button>
                            ) : (
                                <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
                            )}

                            <button >Delete</button>
                        </div>
                    </div>
                )};

    </div>
        </>
    )
};
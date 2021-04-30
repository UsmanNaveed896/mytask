import React, { useState } from "react";
import "./todo.css";
export default () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [editingText, setEditingText] = React.useState("");
  const [editId, setEditId] = useState();
  function handleSubmit(e) {
    let random = Math.random() * 49 + 1;
    e.preventDefault();
    let dup = [...todos];
    dup.push({
      title: todo,
      id: parseInt(random),
    });
    setTodos(dup);
  }
  const handleChange = (value) => {
    setTodo(value);
  };

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

  const submitEdits = (id) => {
    // setEditId(id);
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.title = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditId(null);
  };
  const handleDelete = (id) => {
    const duplicate = todos.filter((sin) => sin.id !== id);
    setTodos(duplicate);
  };
  return (
    <>
      <div id="todo-list">
        <h1>Todo List</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          />
          <button type="submit">Add Todo</button>
        </form>
        {todos &&
          todos.length !== 0 &&
          todos.map((single) => (
            <div className="todo">
              <div className="todo-text">
                <input
                  type="checkbox"
                  id="completed"
                  checked={todo.completed}
                />
                {single.id !== editId && <p>{single.title}</p>}
                {single.id === editId ? (
                  <input
                    type="text"
                    onChange={(e) => {
                      setEditingText(e.target.value);
                    }}
                  />
                ) : (
                  <div></div>
                )}
              </div>
              <div className="todo-actions">
                <button onClick={() => setEditId(single.id)}>Edit</button>
                <button onClick={() => submitEdits(single.id)}>Complete</button>

                <button
                  onClick={() => {
                    handleDelete(single.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

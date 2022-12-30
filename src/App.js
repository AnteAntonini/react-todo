import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  const handleFilter = () => {
    switch(status) {
      case 'completed':
        setfilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case 'uncompleted':
          setfilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setfilteredTodos(todos);
          break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null ) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos', JSON.stringify(todos)));
      setTodos(todoLocal);
    }
  };

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    handleFilter();
    saveLocalTodos();
  },[todos, status]);

  return (
    <div className="App">
      <header>Ante's Todo List</header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList setTodos={setTodos} todos={filteredTodos} />
    </div>
  );
}

export default App;

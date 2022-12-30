import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const handleInputText = (e) => {
    setInputText(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, {
      text: inputText,
      completed: false,
      id: uuidv4()
    }]);
    setInputText('');
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  return(
    <form>
      <input type="text" value={ inputText } className="todo-input" onChange={handleInputText}/>
      <button className="todo-button" type="submit" onClick={handleSubmit}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={handleStatus}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
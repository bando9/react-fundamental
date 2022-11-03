import { useState } from 'react'
import classnames from 'classnames'

import './App.css';
import shoppingIcon from './assets/shopping-icon.svg';
import plusIcon from '../src/assets/plus-icon.svg';
import minusIcon from '../src/assets/minus-icon.svg';

function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([
    {title: 'Susu Ultra', count: 1},
    {title: 'Tahu Sumedang', count: 1},
    {title: 'Semangka', count: 1},
    {title: 'Keysa', count: 1}
  ])
  
  const handleAdditionCount = (index) => {
    const newTodos = [...todos];

    newTodos[index].count += 1;
    
    setTodos(newTodos)
  }

  const handleMinusCount = (index) => {
    const newTodos = [...todos];

    newTodos[index].count -= 1;

    setTodos(newTodos)
  }

  return (
    <>
      <nav className="nav">
        <img className="nav-icon" src={shoppingIcon} alt="shopping icon"/>
        <h1 className="nav-title">Shopping List</h1>
      </nav>

      <section className="container">
        <form className="form">
          <input 
            onChange={(e) => {setValue(e.target.value)}}
            value={value}
            className="input"
            type="text"
            placeholder="List"
          />
          <button className="add-button" type="submit">add</button>
        </form>

        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo, index, arr) => {
              return (
                <div key={index} className={`todo ${!(arr.length === index + 1) && 'todo-divider'}`}>


                  {todo.title}
                  <div className="todo-icon-wrapper">
                    <div className="todo-count">{todo.count}</div>

                    <button onClick={() => handleMinusCount(index)} className="todo-action-button">
                      <img src={minusIcon} alt="minus icon"/>
                    </button>

                    <button onClick={() => handleAdditionCount(index)} className="todo-action-button">
                      <img src={plusIcon} alt="plus icon"/>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div>Kosong</div>
        )}
      </section>
    </>
  );
}

export default App;

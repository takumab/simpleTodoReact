import React, { Component } from 'react';
import todoData from './todoData';
import './App.css';
import TodoItems from "./TodoItems";

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todoData
    }
  }
  render() {
    const todos = this.state.todos.map(item => <TodoItems key={item.id} item={item} />);
    return (
      <div className="App">
        <h1>Todos</h1>
        {todos}
      </div>
    );
  }
}

export default App;

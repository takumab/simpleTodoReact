import React, { Component } from 'react';
import todoData from './todoData';
import './App.css';
import TodoItems from "./TodoItems";

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todoData
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {

    this.setState(prevState => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todosItems = this.state.todos.map(item => <TodoItems key={item.id} item={item} handleChange={this.handleChange}/>);
    return (
      <div className="App">
        <h1>Todos</h1>
        {todosItems}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput.js';
import TodoItem from './components/TodoItem.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div class="todo-container">
       <h1>To-do list</h1>
       <TodoInput todoText="" addTodo={this.addTodo} />
          <ul>
            {
              this.state.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
              })
            }
          </ul>
       </div>
      </div>
    );
  }

constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 0, done: true, text: "Learn?"}, // boolean value for completion?
        {id: 1, text: "Node.js"},
      ],
      nextId: 2
  };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id) {
    this.setState({
        todos: this.state.todos.filter((todo, index) => todo.id !== id)
      });
  }
}
export default App;

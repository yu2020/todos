import React from 'react';
import './TodoInput.css';

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.todoText};

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  addTodo(todo) {
    // Ensure a todo was actually entered before submitting
    if (todo.length > 0 && todo.length <28) {
      this.props.addTodo(todo);
      this.setState({value: ''});
    }
    else {
      alert("Length not bigger than 28 or empty")
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button className="btn btn-primary" onClick={() => this.addTodo(this.state.value)}>Submit</button>
      </div>
    );
  }
}

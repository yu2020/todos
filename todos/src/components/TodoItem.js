import React from 'react';
import './TodoItem.css';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="todoWrapper">
        <button className="removeTodo" onClick={(e)=> this.removeTodo(this.props.id) }>remove</button>

        <input className="check" type="checkbox" checked={this.props.done /*Need to change this... */}/>


        {this.props.todo.text}
      </div>
    );
  }



}

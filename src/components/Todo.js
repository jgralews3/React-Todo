import React from 'react';
import './Todo.css'

const Todo = props => {
    return (
        <div
          className={`task${props.task.complete ? " complete" : ""}`}
          onClick={() => props.toggleItem(props.task.id)}
        >
          <p>{props.task.name}</p>
        </div>
      );
}

export default Todo;
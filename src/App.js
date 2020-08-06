import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const list = [
  {
    name: "Start App",
    id: "1",
    complete: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor (){
    super ();
    this.state = {list}
  }

  addTask = task => {
    const newTask = {
      name: task,
      id: Date.now(),
      complete: false
    }
    this.setState({list: [...this.state.list, newTask]})
  }

  toggleItem = taskId => {
    this.setState({
      list: this.state.list.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            complete: !task.complete
          };
        }
        return task;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      list: this.state.list.filter(task => !task.complete)
    });
  };


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList list={this.state.list} toggleItem={this.toggleItem}
        clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;

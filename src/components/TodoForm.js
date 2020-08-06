import React from 'react';

class TodoForm extends React.Component {
    constructor (){
        super();
        this.state = {
            task: ""
        }
    }
    changeHandler = e => {
        this.setState({ task: e.target.value});
    }
    submitHandler = e => {
        e.preventDefault();
        this.props.addTask(this.state.task);
        console.log(this.state.task)
        this.setState({task: ""});
    }

    render(){
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" name="task" placeholder="New Task" onChange={this.changeHandler} value={this.state.task}></input>
                <button>Submit Task</button>
            </form>
        )
    }
}

export default TodoForm;
import React, { Component } from 'react';
import './task.css';

class Task extends Component {

    constructor(props) {
        super();

        this.state ={
            task: props.task,
            };
        
        this.parentDel = props.deleteTask;
    }

    taskStatus = (e) => {

        const newTask = {
            ...this.state.task,
            isDone: !this.state.task.isDone
        }
        
        this.setState({
            task: newTask
        })
        
        this.forceUpdate();
    }

    deleteTask = (e) => {
        this.parentDel(this.state.task.id);
    }

    render() {
        return(
            <div className={this.state.task.isDone ? 'task active' : 'task'} >
                <input type="checkbox" onClick={this.taskStatus.bind(this)}/>
                {this.state.task.title}
                <span onClick={this.deleteTask.bind(this)}>x</span>
            </div>
        )           
    }
};

export default Task;
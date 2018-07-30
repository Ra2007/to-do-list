import React, { Component } from 'react';
import './task.css';

class Task extends Component {

    constructor(props) {
        super(props);

        this.parentDeleteTask = props.deleteTask;
        this.parentUpdateTask = props.updateTask;
    }

    taskStatus = () => {

        const task = {...this.props.task};
        task.isDone = !task.isDone;
        this.parentUpdateTask(task);
    }

    deleteThisTask = () => {
        this.parentDeleteTask(this.props.task.id);
    }

    render() {
        return(
            <div className={this.props.task.isDone ? 'task active' : 'task'} >
                <input type="checkbox" onClick={this.taskStatus}/>
                    {this.props.task.title}
                <span onClick={this.deleteThisTask}>x</span>
            </div>
        )           
    }
};

export default Task;
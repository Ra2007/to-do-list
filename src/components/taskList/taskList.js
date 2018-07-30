import React, { Component } from 'react';
import Task from './task';
import './taskList.css';

class TaskList extends Component {

    constructor(props) {
        super();
    }

    

    render() {
        return(
            <div className="listTasks">
            {this.props.tasks.map((task, index) => {
                return (
                    // <div className={task.isDone ? 'task active' : 'task'} key={index}>
                    //     <input type="checkbox" onClick={this.taskStatus.bind(this, task)}/>
                    //     {task.title}
                    //     <span onClick={this.props.deleteTask.bind(this, task)}>x</span>
                        <Task 
                        task={task} 
                        deleteTask={this.props.deleteTask.bind(this)}
                        key={task.id}
                        />
                    // </div>
                )
            })}
            </div>
        )
    }
};

export default TaskList;
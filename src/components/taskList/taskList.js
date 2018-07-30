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
                            <Task 
                                task={task} 
                                deleteTask={this.props.deleteTask}
                                updateTask={this.props.updateTask}
                                key={task.id}
                            />                    
                        )
                    })
                }
            </div>
        )
    }
};

export default TaskList;
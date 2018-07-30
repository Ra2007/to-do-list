import React, { Component } from 'react';

import './addTask.css';

class AddTask extends Component {

    constructor(props) {
        super();

        this.newIndex = 5;
    }

    addNewTask = (e) => {
        if ( e.key === 'Enter' ) {      
            const newTask = {
                title: e.currentTarget.value, 
                isDone: false, 
                id: this.newIndex
            };
            
            this.props.addTask(newTask);

            e.currentTarget.value = '';
            this.newIndex++;
        };
    }

    render() {
        return(
            <div className="addTask">
                <input type="text" onKeyPress={this.addNewTask}/>
            </div>
        )
    }
};

export default AddTask;
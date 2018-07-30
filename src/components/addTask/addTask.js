import React, { Component } from 'react';
import './addTask.css';

class AddTask extends Component {

    constructor(props) {
        super();
    }

    render() {
        return(
            <div className="addTask">
                <input type="text" onKeyPress={this.props.addtask}/>
            </div>
        )
    }
};

export default AddTask;
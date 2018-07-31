import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {

    constructor(props) {
        super();        
    }
    
    handleFilterChange = (e) => {
        this.props.onFilterChanged(e.currentTarget.dataset.value);
    }

    render() {
        let { tasks, filter, clearCompleted } = this.props;
        return(
            <div className="footer">
                <div>
                    { tasks.filter((t) => !t.isDone).length } items left
                </div>
                <div className="buttons">
                    <button 
                        className={ filter === "all" ? "selected" : "" } 
                        data-value="all" 
                        onClick={this.handleFilterChange} >
                        All
                    </button>
                    <button 
                        className={ filter === "active" ? "selected" : "" } 
                        data-value="active" 
                        onClick={this.handleFilterChange} >
                        Active
                    </button>
                    <button 
                        className={ filter === "complited" ? "selected" : "" } 
                        data-value="complited" 
                        onClick={this.handleFilterChange} >
                        Completed
                    </button>
                </div>
                <div>
                    <span className="buttonComplited" onClick={clearCompleted}>
                        Clear completed
                    </span>
                </div>
            </div>
        )
    }
};

export default Footer;
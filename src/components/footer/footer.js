import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {

    constructor(props) {
        super();
    }    

    render() {
        return(
            <div className="footer">
                <div>3 items left</div>
                <div className="buttons">
                    <button className="active">All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
                <div>Clear completed</div>
            </div>
        )
    }
};

export default Footer;
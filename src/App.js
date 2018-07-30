import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/taskList/taskList';
import AddTask from './components/addTask/addTask';
import Footer from './components/footer/footer';

class App extends Component {

  constructor() {
    super()

    this.newIndex = 5;

    this.state = {
      tasks: [
        {
          id: 0,
          title: "Первая запись",
          isDone: false
        },{
          id: 1,
          title: "Вторая запись",
          isDone: false
        },{
          id: 2,
          title: "Третья запись",
          isDone: false
        },{
          id: 3,
          title: "Четвертая запись",
          isDone: false
        },{
          id: 4,
          title: "Пятая запись",
          isDone: false
        }
      ]
    };
  }

  addtask = (e) => {
    if ( e.key === 'Enter' ) {      
      this.setState({
        tasks: [...this.state.tasks, { title: e.currentTarget.value, isDone: false, id: this.newIndex}]
      })
      e.currentTarget.value = '';
      this.newIndex++;
    };
  }

  deleteTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.filter((t) => {
        return t.id !== taskId;
      })
    })
  }

  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="todolist">
          <AddTask 
            addtask={this.addtask}
            />
          <TaskList 
            tasks={this.state.tasks} 
            deleteTask={this.deleteTask}           
            />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

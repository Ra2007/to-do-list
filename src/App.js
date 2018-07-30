import React, { Component } from 'react';
import TaskList from './components/taskList/taskList';
import AddTask from './components/addTask/addTask';
import Footer from './components/footer/footer';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()

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

  addTask = (task) => {
        
    this.setState({
      tasks: [...this.state.tasks, task]
      
    });

  }

  deleteTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.filter((t) => {
        return t.id !== taskId;
      })
    })
  }
  
  updateTask = (task) => {
    const newTaskList = [...this.state.tasks];
    console.log(newTaskList.indexOf(task));
    newTaskList.forEach((t) => {
      if (t.id === task.id) {
        t.isDone = task.isDone;
        return;
      }
    });

    this.setState({
      task: newTaskList
    });   

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
            addTask={this.addTask}
            />
          <TaskList 
            tasks={this.state.tasks} 
            deleteTask={this.deleteTask}
            updateTask={this.updateTask}           
            />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

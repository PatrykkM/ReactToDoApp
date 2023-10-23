import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";
class App extends Component {
  counter = 2;
  state = {
    tasks: [
      {
        id: 0,
        text: `Dostać pracę jako Junior Frontend developer (react)`,
        date: `2024-12-30`,
        important: true,
        active: true,
        finishDate: `null`,
      },
      {
        id: 1,
        text: `Zdać Bardzo dobrze studia`,
        date: `2027-01-20`,
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };
  handleDelete = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    });
  };
  HandleChangeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };
  AddTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    };
    let tasks = [...this.state.tasks];
    tasks.push(task);
    this.setState({
      tasks,
    });
    this.counter++;
    return true;
  };

  render() {
    return (
      <div className="App">
        <AddTask add={this.AddTask} />
        <TaskList
          tasks={this.state.tasks}
          Delete={this.handleDelete}
          Change={this.HandleChangeTaskStatus}
        />
      </div>
    );
  }
}

export default App;

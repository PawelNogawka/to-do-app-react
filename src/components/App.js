import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
  counter = 3;
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrac w gre",
        important: false,
        active: true,
        date: "2022-12-12",
        finishDate: null,
      },
      {
        id: 1,
        text: "pic mleko",
        important: false,
        active: true,
        date: "2022-12-12",
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];

    const index = tasks.findIndex((task) => task.id === id);

    tasks.splice(index, 1);
    this.setState({
      tasks,
    });
  };

  changeActive = (id) => {
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

  addTask = (text, checked, date) => {
    const task = {
      id: this.counter,
      text: text,
      important: checked,
      active: true,
      date: date,
      finishDate: null,
    };

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));

    this.counter++;

    return true
  };

  render() {
    return (
      <div>
        <div className="app-top">
          <h1 className="main-heading">Todo app</h1>
          <AddTask add={this.addTask} />
        </div>

        <div className="task-container">
          <TaskList
            tasks={this.state.tasks}
            delete={this.deleteTask}
            change={this.changeActive}
          />
        </div>
      </div>
    );
  }
}

export default App;

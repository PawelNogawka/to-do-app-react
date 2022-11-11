import React, { Component } from "react";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate,
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { text, checked, date } = this.state;

    if (text.length > 2) {
      const add = this.props.add(text, checked, date);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate,
        });
      }
    } else {
      alert(
        "Task name is too short, name should contain at least 3 characters"
      );
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + "-12-31";
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form-column">
          <label className="add-label" htmlFor="text">
            Add a task:
          </label>
          <input
            type="text"
            id="text"
            className="input text-input"
            value={this.state.text}
            onChange={this.handleText}
          />
        </div>
        <div className="form-row">
          <div className="form-input-box">
            <label htmlFor="checkbox">Priority:</label>
            <input
              type="checkbox"
              id="checkbox"
              className="input checkbox-input"
              checked={this.state.checked}
              onChange={this.handleCheckbox}
            />
          </div>
          <div className="form-input-box">
            <label htmlFor="date">Do a task to:</label>
            <input
              type="date"
              id="date"
              className="input date-input"
              value={this.state.date}
              min={this.minDate}
              max={maxDate}
              onChange={this.handleDate}
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          add task
        </button>
      </form>
    );
  }
}

export default AddTask;

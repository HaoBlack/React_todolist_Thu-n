import React, { Component } from "react";

class AddNewTask extends Component {
  handleAddNewTask = ()=>{
    this.props.clearBeforeAddNewTask();
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn my-3 btn--newTask"
          data-toggle="modal"
          data-target="#modalTask"
          onClick={this.handleAddNewTask}
        >
          <i className="fa fa-pencil-square-o" />
          Tạo Task mới
        </button>
      </div>
    );
  }
}

export default AddNewTask;

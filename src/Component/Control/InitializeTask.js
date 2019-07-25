import React, { Component } from "react";

class InitializeTask extends Component {
  InitializeTask = () => {
    this.props.generateData();
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn my-3 btn-info"
          onClick={this.InitializeTask}
        >
          <i className="fa fa-pencil-square-o" />
          Lấy dữ liệu từ LocalStorage
        </button>
      </div>
    );
  }
}

export default InitializeTask;

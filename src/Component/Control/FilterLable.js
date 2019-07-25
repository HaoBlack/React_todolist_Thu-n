import React, { Component } from "react";

class FilterLable extends Component {
  hanldeFilterLable = filterLable => {
    this.props.changeFilterLable(filterLable);
  };
  render() {
    return (
      <div className="filter filter--label">
        <ul className="list-unstyled text-left">
          Nhãn
          <li
            className="py-1 display-5 lead"
            onClick={this.hanldeFilterLable.bind(this,"Frontend")}
          >
            <i className="fa fa-circle mr-2" />
            Frontend
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={this.hanldeFilterLable.bind(this,"Backend")}
          >
            <i className="fa fa-circle mr-2" />
            Backend
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={this.hanldeFilterLable.bind(this,"API")}
          >
            <i className="fa fa-circle mr-2" />
            API
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={this.hanldeFilterLable.bind(this,"Issue")}
          >
            <i className="fa fa-circle mr-2" />
            Issue
          </li>
        </ul>
      </div>
    );
  }
}

export default FilterLable;

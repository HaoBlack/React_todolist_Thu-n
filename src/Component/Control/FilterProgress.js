

import React, { Component } from "react";

class FilterProgress extends Component {
  hanldeFilterLable = filterProgress => {
    this.props.changeFilterProgress(filterProgress);
  };

  render() {
    return (
      <div className="filter filter--progress">
        <ul className="list-unstyled text-left">
          Lọc
          <li
            className="py-1 display-5 lead"
            onClick={this.hanldeFilterLable.bind(this, -1)}
          >
            Tất cả
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={this.hanldeFilterLable.bind(this, 1)}
          >
            <i className="fa fa-spinner mr-2" />
            Bắt đầu
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={this.hanldeFilterLable.bind(this, 2)}
          >
            <i className="fa fa-anchor mr-2" />
            Tạm ngừng
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={this.hanldeFilterLable.bind(this, 3)}
          >
            <i className="fa fa-check-square-o mr-2" />
            Hoàn thành
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={this.hanldeFilterLable.bind(this, 4)}
          >
            <i className="fa fa-trash-o mr-2" />
            Hủy bỏ
          </li>
        </ul>
      </div>
    );
  }
}

export default FilterProgress;


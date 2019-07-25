import React, { Component } from "react";

class FilterPriority extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterPriority: ""
    };
  }

  onChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        this.props.changeFilterPriority(this.state.filterPriority);
      }
    );
  };
  render() {
    return (
      <div className="form-group text-left">
        <label htmlFor="sel1">Độ ưu tiên</label>
        <select
          className="form-control"
          onChange={this.onChange}
          name="filterPriority"
        >
          <option className="font-weight-bold" disabled selected>
            Chọn độ ưu tiên
          </option>
          <option className="font-weight-bold" value={-1}>
            Tất cả
          </option>
          <option className="text-info font-weight-bold" value={2}>
            Thấp
          </option>
          <option className="text-success font-weight-bold" value={3}>
            Trung bình
          </option>
          <option className="text-danger font-weight-bold" value={1}>
            Cao
          </option>
        </select>
      </div>
    );
  }
}

export default FilterPriority;

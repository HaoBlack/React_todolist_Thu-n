import React, { Component } from "react";

class FilterSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterSearch: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    },()=>{
      this.props.changeFilterSearch(this.state.filterSearch);
    });
  };

  render() {
    return (
      <div className="form-group text-left my-0">
        <input
          type="text"
          className="form-control"
          placeholder="Tìm kiếm công việc"
          onChange={this.onChange}
          name="filterSearch"
        />
      </div>
    );
  }
}

export default FilterSearch;

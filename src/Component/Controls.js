import React, { Component } from "react";
import Addnewtask from "./Control/AddNewTask";
import Filterlable from "./Control/FilterLable";
import Filterpriority from "./Control/FilterPriority";
import Filterprogress from "./Control/FilterProgress";
import Sort from "./Control/Sort";
import InitializeTask from "./Control/InitializeTask";

class Controls extends Component {
  render() {
    return (
      <div className="col-md-3 text-center px-0">
        <div className="header header--left d-flex align-items-center">
          <img src="./img/user_1.jpg" className="ml-2 user" alt />
          <h3 className="text-white d-inline font-weight-light ml-2">
            Lê Quang Song
          </h3>
        </div>

        <Addnewtask clearBeforeAddNewTask={this.props.clearBeforeAddNewTask} />

        <InitializeTask generateData={this.props.generateData} />

        {/* Filter */}
        <div className="px-3">
          <Filterprogress
            changeFilterProgress={this.props.changeFilterProgress}
          />

          <Filterlable 
          changeFilterLable={this.props.changeFilterLable} 
          />

          <Filterpriority
          changeFilterPriority={this.props.changeFilterPriority} />

          <Sort 
          changeSortType={this.props.changeSortType}
          />
        </div>
      </div>
    );
  }
}

export default Controls;

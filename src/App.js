import React, { Component } from "react";
import ModalPopup from "./Component/ModalPopup";
import Todolist from "./Component/Todolist";
import Control from "./Component/Controls";
import randomid from "random-id";

import listOfTasks from "./Model/GetData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      tasksEditing: null,
      isAddNewTask: true,

      //Filter
      filterType: "",
      filterProgress: -1,
      filterPriority: "",

      filterLable: "",
      filterSearch: "",

      //sort
      sortType: ""
    };
  }

  generateData = () => {
    localStorage.setItem("tasks", JSON.stringify(listOfTasks.list));
  };

  componentWillMount = () => {
    let tasksJSON = JSON.parse(localStorage.getItem("tasks"));
    this.setState({
      tasks: tasksJSON
    });
  };

  addNewData = data => {
    // console.log(data);
    if (this.state.isAddNewTask) {
      this.data = randomid(5);
      let tasksJSON = JSON.parse(localStorage.getItem("tasks")); //lấy dữ liệu từ local xuống
      tasksJSON = [...tasksJSON, data]; // thêm dữ liệu vào local
      this.setState({
        //tạo ra tasksJSON để hứng dữ liệu
        tasks: tasksJSON
      });
      localStorage.setItem("tasks", JSON.stringify(tasksJSON)); // đưa dữ liệu lên local hiễn thị ra màn hình
    }
  };

  clearBeforeAddNewTask = () => {
    this.setState({
      isAddNewTask: true
    });
  };

  //Hiển thị task lên modelPopup ngoài giao diện
  editTask = data => {
    this.setState({
      isAddNewTask: false,
      tasksEditing: data
    });
  };

  //Hàm dùng để sữa task
  onEditTask = data => {
    if (!this.state.addNewData) {
      // nó chỉ thực hiện khi state.addNewTask = false thì nó mới thực hiện
      let tasksJSON = JSON.parse(localStorage.getItem("tasks")); //lấy dữ liệu từ local xuống

      //find task
      for (let i in tasksJSON) {
        if (tasksJSON[i].id === data.id) {
          tasksJSON[i].name = data.name;
          tasksJSON[i].priority = data.priority;
          tasksJSON[i].lableArr = data.lableArr;
          tasksJSON[i].membersIDArr = data.membersIDArr;
          tasksJSON[i].status = data.status;
          tasksJSON[i].description = data.description;
        }
      }

      this.setState({
        //tạo ra tasksJSON để hứng dữ liệu
        tasks: tasksJSON
      });
      localStorage.setItem("tasks", JSON.stringify(tasksJSON)); // đưa dữ liệu lên local hiễn thị ra màn hình
    }
  };

  changeProgress = (id, progress) => {
    // console.log(id, " - ", progress);
    let tasksJSON = JSON.parse(localStorage.getItem("tasks"));
    for (let index in tasksJSON) {
      if (tasksJSON[index].id === id) {
        tasksJSON[index].status = progress;
      }
    }
    this.setState({
      tasks: tasksJSON
    });
    localStorage.setItem("tasks", JSON.stringify(tasksJSON));
  };

  changeFilterProgress = filterProgress => {
    // console.log(filterProgress);
    this.setState({
      filterType: "filterProgress",
      filterProgress: filterProgress
    });
  };

  changeFilterLable = filterLable => {
    // console.log(filterLable)
    this.setState({
      filterType: "filterLable",
      filterLable: filterLable
    });
  };

  changeFilterPriority = filterPriority => {
    // console.log(filterPriority);
    this.setState({
      filterType: "filterPriority",
      filterPriority: filterPriority
    });
  };

  changeFilterSearch = filterSearch => {
    // console.log(filterSearch)
    this.setState({
      filterType: "filterSearch",
      filterSearch: filterSearch
    });
  };

  changeSortType = sortType => {
    this.setState({
      filterType: "sort",
      sortType: sortType
    });
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  render() {
    let {
      tasks,
      isAddNewTask,
      tasksEditing,
      filterProgress,
      filterType,
      filterLable,
      filterSearch,
      filterPriority,
      sortType
    } = this.state;
    // console.log(listOfTasks.list);
    return (
      <div>
        <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <Control
              generateData={this.generateData}
              clearBeforeAddNewTask={this.clearBeforeAddNewTask}
              changeFilterProgress={this.changeFilterProgress}
              changeFilterLable={this.changeFilterLable}
              changeSortType={this.changeSortType}
              changeFilterPriority={this.changeFilterPriority}
            />
            {/* DISPLAY */}
            <Todolist
              tasks={tasks}
              editTask={this.editTask}
              changeProgress={this.changeProgress}
              filterProgress={filterProgress}
              filterLable={filterLable}
              filterType={filterType}
              filterSearch={filterSearch}
              filterPriority={filterPriority}
              changeFilterSearch={this.changeFilterSearch}
              sortType={sortType}
            />
          </div>
        </div>
        {/* The Modal */}
        <div className="modal fade" id="modalTask">
          <div className="modal-dialog modal-lg">
            <ModalPopup
              addNewData={this.addNewData}
              isAddNewTask={isAddNewTask}
              tasksEditing={tasksEditing}
              onEditTask={this.onEditTask}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;

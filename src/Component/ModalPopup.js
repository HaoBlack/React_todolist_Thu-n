import React, { Component } from "react";
import { Checkbox, CheckboxGroup } from "react-checkbox-group";

class ModalPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      description: "",
      priority: "",
      membersIDArr: [],
      lableArr: [],
      status: 1
    };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addNewData(this.state);
    this.props.onEditTask(this.state);
  };

  memberChanged = newMember => {
    this.setState({
      membersIDArr: newMember
    });
  };

  memberLable = newlable => {
    this.setState({
      lableArr: newlable
    });
  };

  componentWillReceiveProps = nextProps => {
    // console.log(nextProps);
    if (nextProps && nextProps.isAddNewTask) {
      this.clearForm();
    }
    // kiểm tra vế 2 nếu mà nextProps.isAddNewTask = false tức là !nextProps.isAddNewTask = true
    // thì mới thưc hiện công việc là sữa

    if (nextProps && nextProps.tasksEditing && !nextProps.isAddNewTask) {
      this.setState({
        id: nextProps.tasksEditing.id,
        name: nextProps.tasksEditing.name,
        description: nextProps.tasksEditing.description,
        priority: nextProps.tasksEditing.priority,
        membersIDArr: nextProps.tasksEditing.membersIDArr,
        lableArr: nextProps.tasksEditing.lableArr
      });
    }
  };

  clearForm = () => {
    this.setState({
      id: "",
      name: "",
      description: "",
      priority: "",
      membersIDArr: [],
      lableArr: []
    });
  };

  render() {
    return (
      <div className="modal-content">
        {/* Modal Header */}
        <div className="modal-header">
          <h4 className="modal-title">
            {this.props.isAddNewTask ? "ADD TASK" : "EDIT TASK"}
          </h4>
          <button type="button" className="close" data-dismiss="modal">
            ×
          </button>
        </div>
        <form onSubmit={this.onSubmit}>
          {/* Modal body */}
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="taskName">Tên công việc:</label>
              <input
                type="text"
                className="form-control"
                id="taskName"
                name="name"
                onChange={this.onChange}
                value={this.state.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Mô tả:</label>
              <textarea
                className="form-control"
                rows={2}
                id="description"
                name="description"
                onChange={this.onChange}
                value={this.state.description}
              />
            </div>
            <div className="form-group">
              <label htmlFor="priority">Độ ưu tiên:</label>
              <select
                onChange={this.onChange}
                className="form-control"
                id="priority"
                name="priority"
                value={this.state.priority}
              >
                <option disabled selected>
                  Chọn độ ưu tiên
                </option>
                <option value={3}>Thấp</option>
                <option value={2}>Trung bình</option>
                <option value={1}>Cao</option>
              </select>
            </div>
            <label htmlFor>Người Thực Hiện:</label>
            <br />
            <CheckboxGroup
              checkboxDepth={2} // This is needed to optimize the checkbox group
              name="membersIDArr"
              value={this.state.membersIDArr}
              onChange={this.memberChanged}
            >
              <label>
                <Checkbox value="user_2" /> Nguyễn Văn
              </label>
              <label>
                <Checkbox value="user_3" /> Minh Tuấn
              </label>
              <label>
                <Checkbox value="user_4" /> Trung Hiếu
              </label>
              <label>
                <Checkbox value="user_5" /> Tấn Khải
              </label>
            </CheckboxGroup>
            <br />
            <label htmlFor>Nhãn:</label>
            <br />
            <CheckboxGroup
              checkboxDepth={2} // This is needed to optimize the checkbox group
              name="lableArr"
              value={this.state.lableArr}
              onChange={this.memberLable}
            >
              <label>
                <Checkbox value="Frontend" /> Frontend
              </label>
              <label>
                <Checkbox value="Backend" /> Backend
              </label>
              <label>
                <Checkbox value="API" /> API
              </label>
              <label>
                <Checkbox value="Issue" /> Issue
              </label>
            </CheckboxGroup>
            {/* <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  defaultValue
                />
                Frontend
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  defaultValue
                />
                Backend
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  defaultValue
                />
                API
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  defaultValue
                />
                Issue
              </label>
            </div> */}
          </div>
          {/* Modal footer */}
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-primary"
              // data-dismiss="modal"
            >
              {this.props.isAddNewTask ? "ADD TASK" : "EDIT TASK"}
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ModalPopup;

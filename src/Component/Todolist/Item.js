import React, { Component } from "react";
import { parse } from "@babel/parser";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProgress: ""
    };
  }

  onChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        this.props.changeProgress(
          this.props.item.id,
          this.state.selectedProgress
        );
      }
    );
  };

  getLabelColor = label => {
    switch (label) {
      case "Frontend":
        return "#389E0D";
      // break;
      case "Backend":
        return "#722ED1";
      // break;

      case "API":
        return "#13C2C2";
      // break;

      case "Issue":
        return "#CF1322";
      // break;

      default:
        break;
    }
  };

  handleEditing = () => {
    this.props.editTask(this.props.item);
  };

  render() {
    let { item, index } = this.props;
    // console.log(item)
    //item = this.props.item
    //index = this.props.index
    // console.log(item);
    // console.log(index);

    //lableArr

    let elmlableArr = item.lableArr.map((label, index) => {
      // console.log(this.getLabelColor(label))
      return (
        <i
          key={index}
          className="fa fa-circle"
          style={{ color: this.getLabelColor(label) }}
        />
      );
    });

    //priority
    let elmPriority;
    let classPriority;
    switch (parseInt(item.priority, 10)) {
      case 1:
        elmPriority = "Cao";
        classPriority = "text-danger";
        break;
      case 2:
        elmPriority = "Thấp";
        classPriority = "text-primary";
        break;
      case 3:
        elmPriority = "Trung bình";
        classPriority = "text-success";
        break;

      default:
        break;
    }

    // MembersIDArr
    let elmMember = item.membersIDArr.map((member, index) => {
      return (
        <img
          key={index}
          src={`./img/${member}.jpg`}
          className="user"
          alt="user"
        />
      );
    });

    let getStatusIcon;
    switch (parseInt(item.status, 10)) {
      case 1:
        getStatusIcon = "fa-spinner";
        break;
      case 2:
        getStatusIcon = "fa-anchor";
        break;
      case 3:
        getStatusIcon = "fa-check-square-o";
        break;
      case 4:
        getStatusIcon = "fa-trash-o";
        break;

      default:
        getStatusIcon = "";
        break;
    }

    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td className="text-center">{item.name}</td>
        <td className="text-center">{elmlableArr}</td>
        <td className={`${classPriority} font-weight-bold text-center`}>
          {elmPriority}
        </td>
        <td className="text-center">
          {/* <img src="./img/user_2.jpg" className="user" alt />
          <img src="./img/user_3.jpg" className="user" alt /> */}
          {elmMember}
          {/* {item.membersIDArr} */}
        </td>
        <td className="text-center d-flex">
          <button
            data-toggle="modal"
            data-target="#modalTask"
            type="button"
            className="btn btn-outline-primary"
            onClick={this.handleEditing}
          >
            Sửa
          </button>
          {/* <button type="button" className="btn btn-outline-success">
            Xong
          </button>
          <button type="button" className="btn btn-outline-danger">
            Xóa
          </button> */}
          <div className="form-group mx-2 my-0">
            <select
              className="form-control"
              onChange={this.onChange}
              name="selectedProgress" // luôn tương ứng vs 1 cái state nên phải tạo 1 cái state trên cũng chứ nó
              id=""
            >
              <option value="" disabled selected>
                Chọn tình trạng
              </option>
              <option value={1}>Bắt đầu</option>
              <option value={2}>Tạm ngừng</option>
              <option value={3}>Hoàn thành</option>
              <option value={4}>Hủy bỏ</option>
            </select>
          </div>
        </td>
        <td className="text-center">
          <i className={`fa ${getStatusIcon} mr-2`} />
        </td>
      </tr>
    );
  }
}

export default Item;

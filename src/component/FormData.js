import React, { Component } from 'react';
import { Modal } from 'antd';

export default class FormData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      img: '',
      status: false
    };
  }
  componentWillMount = () => {
    if (this.props.edit) {
      this.setState({
        id: this.props.edit.id,
        name: this.props.edit.name,
        img: this.props.edit.img,
        status: this.props.edit.status
      });
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.edit) {
      this.setState({
        id: this.props.edit.id,
        name: this.props.edit.name,
        img: this.props.edit.img,
        status: this.props.edit.status
      });
    } else if (!nextProps.edit) {
      this.setState({
        id: '',
        name: '',
        img: '',
        status: false
      });
    }
  }
  //   ...........on form
  onHandelChange = e => {
    var target = e.target;
    var value = target.value;
    var name = target.name;
    if (name === 'status') {
      value = target.value === 'true' ? true : false;
    }
    this.setState({
      [name]: value
    });
  };
  onClear = () => {
    this.setState({
      name: '',
      img: '',
      status: false
    });
  };
//   validateForm = () => {
//     let nameError = "";
//     let imgError = "";
//     if (this.state.name === '') {
//       nameError = 'Tên nhân vật không được để trống!';
//     }
//     if (this.state.img === '') {
//         imgError = 'Tên nhân vật không được để trống!';
//     }
//     if(nameError || imgError) {
//         this.setState({
//             nameError, imgError 
//         })
//         return false;
//     }
//   };
  onHandelSubmit = e => {
    e.preventDefault();
    var isValid =   this.validateForm();
    this.props.onHandelSubmit(this.state);
    if(isValid) {

    } else {
        this.onClear();
        this.props.handleOk();
    }

  };
  render() {
    var { name, img, status, id, nameError, imgError } = this.state;

    return (
      <Modal
        title={id ? 'Cập nhật' : 'Thêm mới'}
        visible={this.props.visible}
        onCancel={this.props.handleCancel}
      >
        <form onSubmit={this.onHandelSubmit}>
          <div className="form-group">
            <label className="font-weight-bold">Name</label>
            <input
              className="form-control"
              placeholder="Nhập tên nhân vật"
              name="name"
              onChange={this.onHandelChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label className="font-weight-bold">Image</label>
            <input
              className="form-control"
              name="img"
              onChange={this.onHandelChange}
              value={img}
              placeholder="Nhập Link ảnh"
            />
          </div>
          <div className="form-group">
            <label className="font-weight-bold">Status</label>
            <select
              className="form-control"
              name="status"
              value={status}
              onChange={this.onHandelChange}
            >
              <option defaultValue>Chọn trạng thái</option>
              <option value={true}>Hiển thị</option>
              <option value={false}>Ẩn</option>
            </select>
          </div>
          <div className="form-group">
            <button
              className={id ? 'btn btn-warning text-white' : 'btn btn-success'}
            >
              {id ? 'Cập nhật' : 'Lưu lại'}
            </button>
          </div>
        </form>
      </Modal>
    );
  }
}

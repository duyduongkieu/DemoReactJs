import React, { Component } from 'react';
import { Popconfirm, message } from 'antd';
export default class Item extends Component {
  // ......delete

  onDelete = () => {
    this.props.onDelete(this.props.customer.id);
  };
  //   ...Popconfirm
  confirm = e => {
    this.onDelete();
    message.success('Delete done');
  };

  cancel(e) {
    console.log(e);
    message.error('Click on No');
  }

  // ..onUpdateStatus
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.customer.id);
  };
  //   ....onUpdateCus
  onUpdateCus = () => {
    this.props.onUpdateCus(this.props.customer.id);
  };

  render() {
    var { customer, index } = this.props;
    var width = {
      width: 60,
      height: 70
    };
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>
          <img src={customer.img} style={width} alt="#" />
        </td>
        <td style={{ fontWeight: 600 }}>{customer.name}</td>
        <td>
          <span
            className={customer.status === true ? 'classTrue' : 'classFalse'}
            onClick={this.onUpdateStatus}
          >
            {customer.status === true ? 'Hiện' : 'Ẩn'}
          </span>
        </td>
        <td>
          <button
            className="btn btn-warning text-white"
            onClick={this.onUpdateCus}
          >
            Sửa
          </button>
          <Popconfirm
            title="Are you sure delete this task?"
            onConfirm={this.confirm}
            onCancel={this.cancel}
            okText="Yes"
            cancelText="No"
          >
            <button className="btn btn-danger">Xóa</button>
          </Popconfirm>
        </td>
      </tr>
    );
  }
}

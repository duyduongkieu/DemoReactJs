import React, { Component } from 'react';
import { Button } from 'antd';
import Item from './Item';
import FormData from './FormData';
import Search from './Search';
import Sort from './Sort';
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      sortName: 'name',
      sortStatus: 1
    };
  }

  onSearch = keyword => {
    this.setState({
      keyword: keyword
    });
  };
  onSort = (sortName, sortStatus) => {
    this.setState({
      sortName: sortName,
      sortStatus: sortStatus
    });
  };
  
  render() {
    var { customers } = this.props;
    var { keyword, sortName, sortStatus } = this.state;
    if (keyword) {
      customers = customers.filter(customer => {
        return (
          customer.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        );
      });
    }
    if (sortName === 'name') {
        customers.sort((a, b) => {
        if (a.name > b.name) return sortStatus;
        if (a.name < b.name) return -sortStatus;
        else return 0;
      });
    } else {
        customers.sort((a, b) => {
        if (a.status > b.status) return -sortStatus;
        else if (a.status < b.status) return sortStatus;
        else return 0;
      });
    }
    var elementCus = customers.map((customer, index) => {
      return (
        <Item
          customer={customer}
          index={index}
          key={index}
          onUpdateStatus={this.props.onUpdateStatus}
          onDelete={this.props.onDelete}
          onUpdateCus={this.props.onUpdateCus}
        />
      );
    });
    return (
      <div>
        <div className="List-customer">
          <div className=" my-2">
            <div className="d-flex justify-content-left mb-2">
              <Button type="primary" onClick={this.props.showModal}>
                Thêm mới
              </Button>
            </div>
            <div className="row">
              <Search onSearch={this.onSearch} />
              <Sort onSort={this.onSort} sortName={sortName} sortStatus={sortStatus}/>
            </div>

            <FormData
              onHandelSubmit={this.props.onHandelSubmit}
              handleOk={this.props.handleOk}
              visible={this.props.visible}
              handleCancel={this.props.handleCancel}
              edit={this.props.edit}
            />
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Ảnh</th>
              <th scope="col">Tên nhân vật</th>
              <th scope="col">trạng thái</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>{elementCus}</tbody>
        </table>
      </div>
    );
  }
}

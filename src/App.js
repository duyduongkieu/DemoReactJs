import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './component/Header';
import RouterURL from './component/RouterURL';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      edit: '',
      visible: false
    };
  }
  componentDidMount = () => {
    axios.get(`http://localhost:3000/customers`).then(res => {
      const customers = res.data;
      this.setState({ customers });
    });
  };
  //   ........modal
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
      edit: ''
    });
  };
  //   ......fillIndex
  fillIndex = id => {
    var { customers } = this.state;
    var result = -1;
    customers.forEach((customers, index) => {
      if (customers.id === id) {
        result = index;
      }
    });
    return result;
  };
  //   ........onUpdateStatus
  onUpdateStatus = id => {
    var { customers } = this.state;
    var index = this.fillIndex(id);
    if (index !== -1) {
      customers[index].status = !customers[index].status;
      this.setState({
        customers: customers
      });
      axios
        .put(`http://localhost:3000/customers/${id}`, customers[index])
        .then(res => {
          console.log(res);
        });
    }
  };
  //   .......onHandelSubmit
  onHandelSubmit = data => {
    var { customers } = this.state;
    if (data.id === '') {
      data.id = uuid();
      customers.push(data);
      axios.post(`http://localhost:3000/customers`, data).then(res => {
        console.log(res);
      });
    } else {
      var index = this.fillIndex(data.id);
      var id = data.id;
      customers[index] = data;
      axios
        .put(`http://localhost:3000/customers/${id}`, customers[index])
        .then(res => {
          console.log(res);
        });
      console.log(id);
    }
    this.setState({
      customers: customers
    });
    this.handleCancel();
  };
  // ......onDelete
  onDelete = id => {
    var { customers } = this.state;
    var index = this.fillIndex(id);
    if (index !== -1) {
      customers.splice(index, 1);
      this.setState({
        customers: customers
      });
      console.log(customers);
      axios.delete(`http://localhost:3000/customers/${id}`).then(res => {
        console.log(res);
        console.log(res.data);
      });
    }
  };
  //   onUpdateCus
  onUpdateCus = id => {
    var { customers } = this.state;
    var index = this.fillIndex(id);
    var edit = customers[index];
    this.setState({
      edit: edit
    });
    this.showModal();
  };
  //   ...................................
  render() {
    var { customers, visible} = this.state;
    return (
      <Router>
        <div className="App">
          <div>
            <Header/>
          </div>
          <div className="container">
            <RouterURL
              customers={customers}
              onUpdateStatus={this.onUpdateStatus}
              onHandelSubmit={this.onHandelSubmit}
              showModal={this.showModal}
              handleOk={this.handleOk}
              handleCancel={this.handleCancel}
              visible={visible}
              onDelete={this.onDelete}
              onUpdateCus={this.onUpdateCus}
              edit={this.state.edit}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

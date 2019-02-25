import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import List from './List';
import Contact from './Contact';
import Cart from './Cart';

export default class RouterURL extends Component {
  render() {
    var { customers, visible, addCart } = this.props;
    return (
      <div>
        <Route exact path="/" component={() => (
            <Home   customers={customers} />
        )} />
        <Route
          exact
          path="/List"
          component={() => (
            <List
              customers={customers}
              onUpdateStatus={this.props.onUpdateStatus}
              onHandelSubmit={this.props.onHandelSubmit}
              showModal={this.props.showModal}
              handleOk={this.props.handleOk}
              handleCancel={this.props.handleCancel}
              visible={visible}
              edit={this.props.edit}
              onDelete={this.props.onDelete}
              onUpdateCus={this.props.onUpdateCus}
            />
          )}
        />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Cart" component={Cart} />
      </div>
    );
  }
}

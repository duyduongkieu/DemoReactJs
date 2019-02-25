import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keysearch: ''
        }
    }
    onHandleSearch = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.props.onSearch(value);
        this.setState({
            [name]: value
        }) 
    }
  render() {
    return (
      <div className="col-md-8">
        <input
          className="form-control"
          name="keysearch"
          placeholder="Tìm kiếm..."
          onChange={this.onHandleSearch}
        />
      </div>
    );
  }
}

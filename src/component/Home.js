import React, { Component } from 'react';

export default class Home extends Component {
    
//   addCart = (id) => {
//     this.props.addCart(id);
//   };
  render() {
    var elementCus = this.props.customers.map((customer, index) => {
      if (customer.status === true) {
        return (
          <div className="col-md-3" key={index}>
            <div className="card  my-2" style={{ width: '18rem' }}>
              <img
                className="w-100"
                src={customer.img}
                style={{ height: 270 }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{customer.name}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                {/* <button
                  className="btn btn-primary"
                  onClick={() => this.addCart(customer.id)}
                >
                  Add to Cart
                </button> */}
              </div>
            </div>
          </div>
        );
      }
    });
    return <div className="row my-3">{elementCus}</div>;
  }
}

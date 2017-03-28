import React, { Component } from 'react';
import styles from '../public/css/product.css';

class Product extends Component.React {
  render() {
    return <div>
    <div className="row">
    <div className="col-sm-6 col-md-4">
      <div className="thumbnail">
        <img src="https://unsplash.it/200/?blur" alt="{this.props.description}" />
        <div className="caption">
          <h3>{this.props.title}</h3>
          <div className="row">
              <div className="col-sm-6">
                  <p>{this.props.quantity}</p>
              </div>
              <div className="col-sm-6 pull-right">
                  <p>{this.props.price}</p>
              </div>
              <a href="#####" className="btn btn-success pull-right" role="button">+</a>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>
  }
}

export default Product
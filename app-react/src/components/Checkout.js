import React, { Component } from 'react';
//import style from '../css/checkout.css'

class Checkout extends Component {
     constructor(props)
     super(props)

     this.state = {
         cart: []
     }
}

componentWillMount() {
    // fetch
}



  render() {
      let cartItems = this.state.cart.map(function(product, key) {
          return <p key={key></p>

            //   CART STUFF ABOVE!
      })
    return <div>
            <div className="row">
            <div className="col-sm-7" id="checkoutForm">
                <h1>Iron Glory</h1> <br />
                <div>
                    <h3>Customer Information</h3>
                    <div className="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" className="form-control" id="email" placeholder="Email" />
                    </div>
                    <div className="checkbox form-group">
                        <label><input type="checkbox"/>Subscribe to our newsletter</label>
                    </div>
                    <br/>
                    <h3>Shipping Address</h3>
                    <div className="form-group">
                        <label for="name">Customer Name</label>
                        <input type="name" className="form-control" id="name" placeholder="Name (i.e. Collin Schneider)"/>
                    </div>
                    <div className="form-group">
                        <label for="address">Address</label>
                        <input type="address" className="form-control" id="address" placeholder="Street Address)" />
                    </div>
                    <div className="form-inline">
                        <div className="form-group">
                            <label for="city">City</label>
                            <input type="city" className="form-control input-sm" id="city" placeholder="City"/>
                        </div>
                        <div className="form-group">
                            <label for="state">State</label>
                            <input type="state" className="form-control input-sm" id="state" placeholder="State"/>
                        </div>
                            <div className="form-group">
                            <label for="zip">Zip</label>
                            <input type="zip" className="form-control input-sm" id="zip" placeholder="Zip Code"/>
                        </div>
                    </div>
                    <br/>

                    <h3>Billing Address</h3>
                    <div className="form-group">
                        <label for="name">Billing Name</label>
                        <input type="name" className="form-control" id="name" placeholder="Name (i.e. Collin Schneider)"/>
                    </div>
                    <div className="form-group">
                        <label for="address">Address</label>
                        <input type="address" className="form-control" id="address" placeholder="Street Address)"/>
                    </div>
                    <div className="form-inline">
                        <div className="form-group">
                            <label for="city">City</label>
                            <input type="city" className="form-control input-sm" id="city" placeholder="City"/>
                        </div>
                        <div className="form-group">
                            <label for="state">State</label>
                            <input type="state" className="form-control input-sm" id="state" placeholder="State"/>
                        </div>
                            <div className="form-group">
                            <label for="zip">Zip</label>
                            <input type="zip" className="form-control input-sm" id="zip" placeholder="Zip Code"/>
                        </div>
                    </div>
                    <br/>
                    <div className="checkbox form-group">
                        <label><input type="checkbox"/>Save information for next time</label>
                    </div>
                </div>
                <br />
                <br />
                <br/>

                <div className="row">
                    <div className="col-sm-6">
                        <a href="">Return to cart</a>
                    </div>
                    <div className="col-sm-6 pull-right">
                        <button type="button" className="btn btn-success btn-lg">Place Order</button>
                    </div>


            </div>
            <div className="col-sm-5 cart">
          
            </div>

        </div>
    </div>
    </div>
  }
}

export default Checkout;
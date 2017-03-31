import React from 'react'
import { browserHistory } from 'react-router'
import './Layout.css'

class Layout extends React.Component {
    constructor(props) {
        super(props)

        // Custom methods
        // this.getCategories = this.getCategories.bind(this)
        this.getProducts = this.getProducts.bind(this)
        this.getProduct = this.getProduct.bind(this)
        this.cart = this.cart.bind(this)
        // this.filterProducts = this.filterProducts.bind(this)
        // this.getCart = this.getCart.bind(this)
        // this.addToCart = this.addToCart.bind(this)
        // this.checkout = this.checkout.bind(this)

    //     Master state
    //     this.state = {
    //         categories: [],
    //         originalProducts: [],
    //         products: [],
    //         product: {},
    //         cart: [],
    //         message: ''
    //     }
    }

    // getCategories() {
    //     fetch('/api/categories')
    //     .then(res => res.json())
    //     .then(res => this.setState({categories: res}))
    // }

    getProducts() {
        fetch('/api/products')
        .then(res => res.json())
        .then(res => this.setState({products: res, originalProducts: res}))
    }

    getProduct(id) {
        fetch('/api/products/' + id)
        .then(res => res.json())
        .then(res => this.setState({product: res}))
    }

    filterProducts(filter) {
        let products = this.state.originalProducts.filter(product => product.name.toLowerCase().includes(filter))
        this.setState({products: products})
    }

    cart() {
        browserHistory.push('/checkout')
    }



 render() {

        const routeComponent = React.cloneElement(this.props.children, {
            // ...this.state,
            // getCategories: this.getCategories,
            getProducts: this.getProducts,
            getProduct: this.getProduct,

            // filterProducts: this.filterProducts,
            // getCart: this.getCart,
            // addToCart: this.addToCart,
            // checkout: this.checkout,
        })

    return <div>
    <header>
        <div className="container-fluid">
            <div className="row">
                <div className="navbar">
                    <div className="col-sm-3">
                        <ul className="list-inline">
                            <li><a href="/">All Patches</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Categories</a></li>
                        </ul>
                        {/*<a onClick={() => browserHistory.push('/checkout')}>Checkout </a>
                        <Link to="/checkout">checkout</Link>
                        <button type="button" className="btn btn-success" onClick={() => browserHistory.push('/checkout')}>Checkout</button>*/}
                    </div>

                    {/*<filterAndSearch filterProducts={this.filterProducts} />*/}

                    <div className="col-sm-9 pull-right text-right">
                        <ul className="list-inline">
                            <li>
                                <div className="form-group form-inline">
                                    <input type="text" className="form-control" id="search" />
                                    <button type="button" className="btn btn-default" id="searchButton">Search</button>
                                </div>
                            </li>
                            <li className="glyphicon glyphicon-shopping-cart" onClick={this.cart}></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <main>
        <div className="container">
          {this.props.children}
        </div>
        <br/>
        <br/>
    </main>

    <footer>
        <div className="footer container-fluid">
            <div className="row">
               
                    <div className="col-sm-4">
                        <a href="#">FAQ</a>
                        <p>contact</p> 
                        <p>follow us <span className="glyphicon glyphicon-cloud"></span></p>
                    </div>

                    <div className="col-sm-4">
                    <img src="/img/iron-glory-logo-inverted.png" />
                    </div>

                    <div className="col-sm-4"> </div>                
              
            </div>
        </div>

    </footer>
   </div>
  }
}

export default Layout;
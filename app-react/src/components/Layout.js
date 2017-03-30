import React from 'react'
import { browserHistory } from 'react-router'
import './Layout.css'

class Layout extends React.Component {
    constructor(props) {
        super(props)

    //     // Custom methods
    //     this.getCategories = this.getCategories.bind(this)
    //     this.getProducts = this.getProducts.bind(this)
    //     this.getProduct = this.getProduct.bind(this)
    //     this.filterProducts = this.filterProducts.bind(this)
    //     this.getCart = this.getCart.bind(this)
    //     this.addToCart = this.addToCart.bind(this)
    //     this.checkout = this.checkout.bind(this)

        // Master state
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

    // getProducts() {
    //     fetch('/api/products')
    //     .then(res => res.json())
    //     .then(res => this.setState({products: res, originalProducts: res}))
    // }

    // getProduct(id) {
    //     fetch('/api/products/' + id)
    //     .then(res => res.json())
    //     .then(res => this.setState({product: res}))
    // }

    // filterProducts(filter) {
    //     let products = this.state.originalProducts.filter(product => product.name.toLowerCase().includes(filter))
    //     this.setState({products: products})
    // }

    // getCart() {
    //     fetch('/api/cart')
    //     .then(res => res.json())
    //     .then(res => this.setState({cart: res}))
    // }

    // addToCart(productId, name, qty) {
    //     fetch('/api/cart', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             product_id: productId,
    //             name: name,
    //             quantity: qty
    //         })
    //     })
    //     .then(res => res.json())
    //     .then(res => {
    //         let cart = this.state.cart
    //         cart.push(res)

    //         this.setState({cart: cart, message: 'Product added to cart successfully.'})

    //         browserHistory.push('/')
    //     })
    // }

    // checkout() {
    //     this.state.cart.forEach(product => fetch('/api/cart/' + product.id, {
    //         method: 'DELETE'
    //     }))
    // }

 render() {

        // const routeComponent = React.cloneElement(this.props.children, {
        //     ...this.state,
        //     getCategories: this.getCategories,
        //     getProducts: this.getProducts,
        //     getProduct: this.getProduct,
        //     filterProducts: this.filterProducts,
        //     getCart: this.getCart,
        //     addToCart: this.addToCart,
        //     checkout: this.checkout,
        // })

        // let message = this.state.message ? <p className="alert alert-success">{this.state.message}</p> : ''

        // if (message) {
        //     setTimeout(() => this.setState({message: ''}), 2000)
        // }

        // // Show a My Cart button if we're not on the checkout page, otherwise show a Checkout button
        // let checkoutButton = location.pathname === '/checkout' ? <a className="btn btn-success" onClick={this.checkout}>Checkout</a> : <a className="btn btn-success" onClick={() => browserHistory.push('/checkout')}>My Cart</a>

    return <div>
    <header>
        <div className="container-fluid">
            <div className="row">
                <div className="navbar">
                    <div className="col-sm-6">
                        <ul className="list-inline">
                            <li>thing 1</li>
                            <li>thing 2</li>
                            <li>thing 3</li>
                        </ul>
                        {/*<a onClick={() => browserHistory.push('/checkout')}>Checkout </a>
                        <Link to="/checkout">checkout</Link>
                        <button type="button" className="btn btn-success" onClick={() => browserHistory.push('/checkout')}>Checkout</button>*/}
                    </div>

                    {/*<filterAndSearch filterProducts={this.filterProducts} />*/}

                    <div className="col-sm-6 pull-right text-right">
                        <ul className="list-inline">
                            <li>login</li>
                            <li className="glyphicon glyphicon-shopping-cart"></li>
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
                    <img src="../img/iron-glory-logo-inverted.png" />
                    </div>

                    <div className="col-sm-4"> </div>                
              
            </div>
        </div>

    </footer>
   </div>
  }
}

export default Layout;
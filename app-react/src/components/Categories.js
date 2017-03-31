import React from 'react'
import { browserHistory } from 'react-router'
import Product from './Product'

class Categories extends React.Component {
    constructor(props) {
        super(props)

        this.getCategories = this.getCategories.bind(this)
        this.getPatches = this.getPatches.bind(this)
        this.getPatch = this.getPatch.bind(this)
        this.filterProducts = this.filterProducts.bind(this)
        this.getCart = this.getCart.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.checkout = this.checkout.bind(this)


        this.state = {
            //categories: [],
            originalPatches: [],
            patches: [],
            patch: {},
            //cart: [],
            //message: ''
        }
    }

    componentWillMount() {
        this.props.getPatches()
    }

    // getCategories() {
    //     fetch('/api/categories')
    //     .then(res => res.json())
    //     .then(res => this.setState({categories: res}))
    // }

    getPatches() {
        fetch('/api/patches')
        .then(res => res.json())
        .then(res => this.setState({patches: res, originalPatches: res}))
    }

    getPatch(id) {
        fetch('/api/patches/' + id)
        .then(res => res.json())
        .then(res => this.setState({patch: res}))
    }

    // filterProducts(filter) {
    //     let patch = this.state.originalPatches.filter(patch => patch.name.toLowerCase().includes(filter))
    //     this.setState({patches: patches})
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

        const routeComponent = React.cloneElement(this.props.children, {
            ...this.state,
            getCategories: this.getCategories,
            getPatches: this.getPatches,
            getPatch: this.getPatch,
            // filterProducts: this.filterProducts,
            // getCart: this.getCart,
            // addToCart: this.addToCart,
            // checkout: this.checkout,
        })


        // let message = this.state.message ? <p className="alert alert-success">{this.state.message}</p> : ''

        // if (message) {
        //     setTimeout(() => this.setState({message: ''}), 2000)
        // }


        // let checkoutButton = location.pathname === '/checkout' ? <a className="btn btn-success" onClick={this.checkout}>Checkout</a> : <a className="btn btn-success" onClick={() => browserHistory.push('/checkout')}>My Cart</a>

    return <div>
    <Product />
    </div>
  }
}

export default Categories;
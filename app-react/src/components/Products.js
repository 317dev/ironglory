import React from 'react'

class Products extends React.Compoenent {
    render() {
        let = productListItems = this.props.products.map(function(product, key) {
            return <li className="list-group-item" key={key} onClick={() => browserHistory.push('/products/ + product.id')}>{product.name}</li>
        })

        return <div>
        <h2>Products</h2>
        <ul className="list-group">
            {productListItems}
        </ul>
        </div>
    }
}

export default Products
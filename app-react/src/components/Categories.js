import React from 'react'
import { browserHistory } from 'react-router'

class Category extends React.Component {
    // Get products
    componentWillMount() {
        this.props.getProducts()
    }

  render() {
    return (
      <h1>Hello Categories</h1>
    )
  }
}

export default Categories;
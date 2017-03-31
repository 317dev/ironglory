import React from 'react'
import { browserHistory } from 'react-router'
import Layout from './Layout'
import './Homepage.css'
import Product from './Product.js'



class Homepage extends React.Component {
    // componentWillMount() {
    //     this.props.getCategories()

  render() {
    return <div>
       <div className="row background">
            <div className="">
                {/*<img src="./iron-glory-logo-inverted.png"/>*/}
                <Product />
            </div>
        </div>
    </div>
  }
}

export default Homepage;


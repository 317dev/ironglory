import React from 'react'
import { browserHistory } from 'react-router'
import Layout from './Layout'
import './Homepage.css'
import Product from './Product.js'



class Homepage extends React.Component {
    constructor(props) {
        super(props)

        this.getPatches = this.getPatches.bind(this)

        this.state = {
            patches: []
        }
    }

    componentDidMount() {
        this.getPatches()
    }

    getPatches() {
    fetch('/api/patches')
    .then(res => res.json())
    .then(res => this.setState({patches: res}))
    .then(res => console.log(this.state.patches))
}

  render() {
    var Products = this.state.patches.map((patch, i) => {
        return <Product patch = {patch} key={i} />
    })
    return <div>
       <div className="row background">
            <div className="">
                {/*<img src="./iron-glory-logo-inverted.png"/>*/}
                {Products}
            </div>
        </div>
    </div>
  }
}

export default Homepage;


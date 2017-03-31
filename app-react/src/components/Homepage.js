import React from 'react'
import { browserHistory } from 'react-router'
import Layout from './Layout'
import './Homepage.css'

class Homepage extends React.Component {
    // componentWillMount() {
    //     this.props.getCategories()

  render() {
    return <div>
       <div class="row background">
            <div class="">
                 <img src="./img/iron-glory-logo-inverted.png"/>
            </div>
        </div>
    </div>
  }
}

export default Homepage;
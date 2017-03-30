import React from 'react'
import { browserHistory } from 'react-router'

class Homepage extends React.Component {
    componentWillMount() {
        this.props.getCategories()
    }
  render() {
    return (
      <h1>Hello Homepage</h1>
    );
  }
}

export default Homepage;
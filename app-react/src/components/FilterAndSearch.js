import React from 'react'

class filterandsearch extends React.Component {
    render() {
        return <div>
        <button type="button" className="btn btn-success btn-block" onClick={this.props.filterproducts('zigzags')}>filter zigzag</button>
        <button type="button" className="btn btn-success btn-block" onClick={() => this.props.filterproducts('')}>remove filters</button>
        </div>
    }
}

export default filterandsearch
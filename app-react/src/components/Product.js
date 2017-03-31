import React from 'react'
import './Product.css'

class Product extends React.Component {
    // componentWillMount() {
    //     this.props.getPatches(this.props.params.id)
    // }

        getPatches() {
        fetch('/api/patches')
        .then(res => res.json())
        .then(res => this.setState({patches: res, originalPatches: res}))
    }

  render() {
console.log(this.props.patch)
    return <div>
      <div className="row">
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={this.props.patch.image} alt={this.props.patch.description} />
          <div className="caption">
            <h3>{this.props.name}</h3>
            <div className="row">
                <div className="col-sm-6">
                    <p>{this.props.patch.quantity}</p>
                </div>
                <div className="col-sm-6 pull-right">
                    <p>{this.props.patch.price}</p>
                </div>
                <a href="#####" className="btn btn-success pull-right" role="button">+</a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  }
}

export default Product;
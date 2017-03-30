import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {
   constructor(props) {
       super(props)
       this.filterProducts = this.filterProducts.bind(this)

       this.state = {
           originalProducts: [],
           products: [],
           filters: {}
       }
   }

   componentWillMount() {
       fetch('#')
       .then(response => response.json())
       //.then(response => console.log(response))
       .then(response => this.setState({products: response, originalProducts: response}))
   }

   filterProducts(term) {
       let products  this.state.originalProducts

       products = products.filter(function(product) {
           return product.name.includes(term)
       })
   }

   render() { <div>
       return <div>{this.props.children}</div>
       <Filterandsearch filterProducts={this.filterProducts} />
       </div>
   }
}

export default App
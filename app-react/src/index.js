import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import App from './components/App'
import Cart from './components/Cart'
import Categories from './components/Categories'
import Checkout from './components/Checkout'
import Homepage from './components/Homepage'
//import Nav from './components/Nav'
//import Product from './components/Product'
//import User from './components/User'

// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route path="/" component={Homepage}>
//         <Route path="checkout" component={Checkout} />
//         <Route path="cart" component={Cart} /> 
//         <Route path="patches" component={Categories} /> 
//     </Route>
//   </Router>,
//   document.getElementById('root')
// );


ReactDOM.render (

   <Router history={browserHistory}>
       <Route path="/" component={App} >
           <IndexRoute component={Homepage} />
           <Route path='checkout' component={Checkout} />
           <Route path='cart' component={Cart} />
           <Route path='patches' component={Categories} />
       </Route>
   </Router>
   , document.getElementById('root')
)
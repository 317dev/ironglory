import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import Layout from './components/Layout'
import Cart from './components/Cart'
import Categories from './components/Categories'
import Checkout from './components/Checkout'
import Homepage from './components/Homepage'

//global config
window.apiHost = 'heroku'

ReactDOM.render (
   <Router history={browserHistory}>
       <Route path="/" component={Layout} >
           <IndexRoute component={Homepage} />
           <Route path='checkout' component={Checkout} />
           <Route path='cart' component={Cart} />
           <Route path='patches' component={Categories} />
       </Route>
   </Router>,

   document.getElementById('root')
)
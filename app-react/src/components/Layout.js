import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return <div>
    <header>
        <div className="container-fluid">
            <div className="row">
                <div className="navbar">
                    <div className="col-sm-6">
                        <ul className="list-inline">
                            <li>thing 1</li>
                            <li>thing 2</li>
                            <li>thing 3</li>
                        </ul>
                    </div>
                    <div className="col-sm-6 pull-right text-right">
                        <ul className="list-inline">
                            <li>login</li>
                            <li className="glyphicon glyphicon-shopping-cart"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <main>
        <div className="container"></div>
        <br/>
        <br/>
    </main>
    <footer>
        <div className="footer container-fluid">
            <div className="row">
               
                    <div className="col-sm-4">
                        <a href="#">FAQ</a>
                        <p>contact</p> 
                        <p>follow us <span className="glyphicon glyphicon-cloud"></span></p>
                    </div>

                    <div className="col-sm-4">
                    <img src="../img/iron-glory-logo-inverted.png" />
                    </div>

                    <div className="col-sm-4"> </div>                
              
            </div>
        </div>

    </footer>
   </div>
  }
}

export default Layout;
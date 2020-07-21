import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import ProductAddUpdate from './add-update'
import ProductDetail from './product-detail'
import ProductHome from './product-home'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Switch>
                    <Route path="/product" exact component={ProductHome}/>
                    <Route path="/product/detail" component={ProductDetail}/>
                    <Route path="/product/addupdate" component={ProductAddUpdate}/>
                    <Redirect to="/product"/>
                </Switch>
            </div>
         );
    }
}
 
export default Product;
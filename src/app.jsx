// 根组件
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Button, message} from 'antd';

import Login from './pages/login/login'
import Admin from './pages/admin/admin'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleClick = () => {
        message.info('按钮提示', 1)
    } 

    render() { 
        return ( 
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Admin} />
                </Switch>
            </BrowserRouter>
         );
    }
}
 
export default App;
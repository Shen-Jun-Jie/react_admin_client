import React, { Component } from 'react';

import './home.less'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="home">
                欢迎使用react 后端管理
            </div>
         );
    }
}
 
export default Home;
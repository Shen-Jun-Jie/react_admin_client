import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import memoryUtils from '../../utils/memoryUtils'

// 管理的路由界面
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const user = memoryUtils.user
        if (!user || !user._id) {
            return <Redirect to="/login" />
        } 
        return ( 
            <div>
                Hello {user.username}
            </div>
         );
    }
}
 
export default Admin;
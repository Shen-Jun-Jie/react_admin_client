// 入口文件
import React from 'react';
import ReactDOM from 'react-dom'

import App from './app'
import memoryUtils from './utils/memoryUtils'
import storageUtils from './utils/storageUtils'

memoryUtils.user = storageUtils.getUser()


ReactDOM.render(
    <App />,
    document.getElementById("root")
)
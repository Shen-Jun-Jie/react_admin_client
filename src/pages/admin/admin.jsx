import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Layout } from 'antd';

import MyHeader from '../../component/header/header'
import LfetNav from '../../component/left-nav/left-nav'
import memoryUtils from '../../utils/memoryUtils'

const { Header, Footer, Sider, Content } = Layout;

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
            <Layout style={{height: '100%'}}>
            <Sider>
                <LfetNav />
            </Sider>
                <Layout>
                    <Header>
                        <MyHeader />
                    </Header>
                    <Content style={{backgroundColor: "white"}}>Content</Content>
                    <Footer style={{textAlign: 'center', color: '#ccc'}}>推荐使用谷歌浏览器，可以获得更加的页面操作体验</Footer>
                </Layout>
            </Layout>
         );
    }
}
 
export default Admin;
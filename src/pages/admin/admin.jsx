import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd';

import MyHeader from '../../component/header/header'
import LfetNav from '../../component/left-nav/left-nav'
import memoryUtils from '../../utils/memoryUtils'
import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'


const { Footer, Sider, Content } = Layout;

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
                    <MyHeader/>
                    <Content style={{margin: 20, backgroundColor: "white"}}>
                        <Switch>
                            <Route path="/home" component={Home} />                      
                            <Route path="/category" component={Category} />                      
                            <Route path="/product" component={Product} />                      
                            <Route path="/role" component={Role} />                      
                            <Route path="/user" component={User} />                      
                            <Route path="/charts/pie" component={Pie} />                      
                            <Route path="/charts/line" component={Line} />                      
                            <Route path="/charts/bar" component={Bar} />  
                            <Redirect to="/home" />    {/* 如果没有对应的路由那么自动跳转到 /home */}                 
                        </Switch>
                    </Content>
                    <Footer style={{textAlign: 'center', color: '#ccc'}}>推荐使用谷歌浏览器，可以获得更加的页面操作体验</Footer>
                </Layout>
            </Layout>
         );
    }
}
 
export default Admin;
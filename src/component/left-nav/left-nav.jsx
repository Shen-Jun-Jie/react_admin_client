import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Menu } from 'antd';
import {
    AppstoreOutlined,
    HomeOutlined,
    SafetyOutlined,
    BarsOutlined,
    ToolOutlined,
    UserOutlined,
    LineChartOutlined
  } from '@ant-design/icons';

import logo from '../../assets/images/logo.png'
import './left-nav.less'

const { SubMenu } = Menu;

class LeftNav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="left-nav">
                <Link to='/' className="left-nav-header">
                    <img src={logo} alt="logo"/>
                    <h1>后台管理</h1>
                </Link>


                <Menu
                    // defaultSelectedKeys={['1']}
                    // defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                    >
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        首页
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<AppstoreOutlined />} title="商品">
                        <Menu.Item icon={<BarsOutlined />} key="2">品类管理</Menu.Item>
                        <Menu.Item icon={<ToolOutlined />} key="3">商品管理</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="4" icon={<UserOutlined />}>
                        用户管理
                    </Menu.Item>
                    <Menu.Item key="5" icon={<SafetyOutlined />}>
                        角色管理
                    </Menu.Item>
                    <SubMenu key="sub2" icon={<LineChartOutlined />} title="图形图表">
                        
                    </SubMenu>
                </Menu>
            </div>
         );
    }
}
 
export default LeftNav;
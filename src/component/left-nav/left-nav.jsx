import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'
import { Menu } from 'antd';

import menuList from '../../config/menuConfig.jsx'
import logo from '../../assets/images/logo.png'
import './left-nav.less'

const { SubMenu } = Menu;

class LeftNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            collapsed: false
         }
    }

    componentWillMount = () => {
        this.menuNodes = this.getMenuNodes(menuList)
    }

    getMenuNodes = (menuList) => {
        const path = this.props.location.pathname
        return menuList.map(menu => {
            if (!menu.children) {
                return (
                    <Menu.Item key={menu.key} icon={menu.icon}>
                        <Link to={menu.key}>
                        {menu.title}
                        </Link>
                    </Menu.Item>
                )
            } else {

                const item = menu.children.find((cItem) => (cItem.key === path))

                if (item) {
                    this.openKey = menu.key
                }

                return (
                    <SubMenu key={menu.key} icon={menu.icon} title={menu.title}>
                        {
                            this.getMenuNodes(menu.children)
                        }
                    </SubMenu>
                )
            }
        })
    }

    render() { 

        // 得到当前请求的路由路径
        const path = this.props.location.pathname
        const openKey = this.openKey

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
                    selectedKeys={[path]}
                    defaultOpenKeys={[openKey]}
                    >
                    {
                        this.menuNodes
                    }
                </Menu>
            </div>
         );
    }
}
//  withRouter 是一个高阶组件
// 新的组件向非路由组件传递3个属性， history/location/match

export default withRouter(LeftNav);
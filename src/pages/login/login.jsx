import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import logo from './images/logo.png'
import './login.less'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import {reqLogin} from '../../api'

// 登录的路由界面
// 用户名密码的合法性要求
// 1. 必须输入
// 2, 必须大于4位
// 3. 必须小于12位
// 4. 必须是英文、数字或下划线组成
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    onFinish = async values => {
        const result = await reqLogin(values.username, values.password)
        if (result.status === 0) {
            memoryUtils.user = result.data
            storageUtils.saveUser(memoryUtils.user)
            this.props.history.replace("/")
        } else {
            message.error("登录失败")
        }
        
    }

    render() { 
        const user = memoryUtils.user
        if (user && user._id) {
            return <Redirect to='/' />
        }

        return ( 
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h2>React 项目：后台管理系统</h2>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form
                    name="normal_login"
                    className="login-form"
                    onFinish={this.onFinish}
                    >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                              required: true,
                              message: '输入不能为空',
                            },
                            {
                                min: 4,
                                message: '最小长度不能小于4'
                            },
                            {
                                max: 12,
                                message: '最大长度不能大于12'
                            },
                            {
                                pattern: /^[0-9a-zA-Z_]+$/,
                                message: '必须是英文、数字或下划线组成'
                            }
                          ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                              required: true,
                              message: '输入不能为空',
                            },
                            {
                                min: 4,
                                message: '最小长度不能小于4'
                            },
                            {
                                max: 12,
                                message: '最大长度不能大于12'
                            },
                            {
                                pattern: /^[0-9a-zA-Z_]+$/,
                                message: '必须是英文、数字或下划线组成'
                            }
                          ]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        登 录
                        </Button>
                    </Form.Item>
                    </Form>
                </section>
            </div>
         );
    }
}
 
export default Login;
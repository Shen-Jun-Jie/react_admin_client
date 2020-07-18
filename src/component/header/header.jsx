import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { Modal } from 'antd';

import './header.less'
import {formateDate} from '../../utils/dateUtils'
import LinkButton from '../../component/link-button'
import storage from '../../utils/storageUtils'
import memoryUtils from '../../utils/memoryUtils'
import {reqWeather} from '../../api/index'
import menuList from '../../config/menuConfig'

class MyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentTime: formateDate(Date.now()),
            dayPictureUrl: '',
            weather: ''
         }
    }

    getStringTime = () => {
        this.intervalId = setInterval(()=> {
            const currentTime = formateDate(Date.now())
            this.setState({currentTime})
        }, 1000)
    }

    getWeather = async () => {
        const {dayPictureUrl, weather} = await reqWeather("上海")
        this.setState({dayPictureUrl, weather})
    }

    getTitle = () => {
        const path = this.props.location.pathname
        let title
        menuList.forEach((menu) => {
            if (menu.key === path) {
                title = menu.title
            } else if (menu.children) {
                const res = menu.children.find((cMenu) => cMenu.key === path)
                if (res) {
                    title = res.title
                }
            }
        })
        return title
    }

    logout = () => {

        Modal.confirm({
            content: '确认退出吗',
            okText: '确认',
            onOk: () => {
                // 删除保存的 user 数据
                storage.removeUser()
                memoryUtils.user = {}
                // 跳转到login页面
                this.props.history.replace("/login")
            },
            Text: '取消',
        });
        this.setState({
            visible: false,
        });
    }


    componentDidMount() {
        this.getStringTime()
        this.getWeather()
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() { 
        const {currentTime, dayPictureUrl, weather} = this.state
        const username = memoryUtils.user.username
        const title = this.getTitle()

        return ( 
            <div className="header">
                <div className="header-top">
                    <span>欢迎，{username}</span>
                    <LinkButton onClick={this.logout}>退出</LinkButton>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">{title}</div>
                    <div className="header-bottom-right">
                        <span>{currentTime}</span>
                        <img src={dayPictureUrl} alt="weather"/>
                        <span>{weather}</span>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default withRouter(MyHeader);
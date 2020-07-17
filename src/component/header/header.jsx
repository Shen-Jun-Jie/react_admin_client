import React, { Component } from 'react';

import './header.less'
import {formateDate} from '../../utils/dateUtils'
import memoryUtils from '../../utils/memoryUtils'
import {reqWeather} from '../../api/index'

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
        setInterval(()=> {
            const currentTime = formateDate(Date.now())
            this.setState({currentTime})
        }, 1000)
    }

    getWeather = async () => {
        const {dayPictureUrl, weather} = await reqWeather("上海")
        this.setState({dayPictureUrl, weather})
    }

    componentDidMount() {
        this.getStringTime()
        this.getWeather()
    }

    render() { 
        const {currentTime, dayPictureUrl, weather} = this.state
        const username = memoryUtils.user.username

        return ( 
            <div className="header">
                <div className="header-top">
                    <span>欢迎，{username}</span>
                    <a href="#">退出</a>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">首页</div>
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
 
export default MyHeader;
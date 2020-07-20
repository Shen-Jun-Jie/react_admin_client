// 所有的接口函数返回的都要是一个promise对象
// 可以根据接口文档定义请求函数
// 包含应用中所有接口请求函数的模块
// 每一个接口返回函数都是 promise
import {message} from 'antd'
import jsonp from 'jsonp'

import ajax from './ajax'

// 登录
export const reqLogin = (username, password) => {
    return ajax('/login', {username, password}, 'POST')
}

// 添加用户
export const reqAddUser = (user) => {
    return ajax('/manage/user/add', user, 'POST')
}

// 百度地图提供的天气预报的接口
// http://api.map.baidu.com/telematics/v3/weather?location=xxx&output=json&ak=3p49MVra6urFRGOT9s8UBWr2

// jsonp请求函数

export const reqWeather = (city) => {
    return new Promise((reslove, reject) => {
        const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
        jsonp(url, {}, (err, data) => {
            if (!err && data.status === "success") {
                const {dayPictureUrl, weather} = data.results[0].weather_data[0]
                reslove({dayPictureUrl, weather})
            } else {
                message.error(err)
            }
        })
    })
}

// 获取一级或者二级分类
export const reqCategory = (parentId=0) => {
    return ajax("/manage/category/list", {parentId})
}

// 添加商品类别
export const reqCategoryAdd = (categoryId, parentId) => {
    return ajax("/manage/category/add", {categoryId, parentId}, "POST")
}

// 更新商品类别名称
export const reqCategoryUpdate = (categoryId, categoryName) => {
    return ajax("/manage/category/update", {categoryId, categoryName}, "POST")
}

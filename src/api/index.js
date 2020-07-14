// 可以根据接口文档定义请求函数
// 包含应用中所有接口请求函数的模块
// 每一个接口返回函数都是 promise

import ajax from './ajax'

// 登录
export const reqLogin = (username, password) => {
    return ajax('/login', {username, password}, 'POST')
}

// 添加用户
export const reqAddUser = (user) => {
    return ajax('/manage/user/add', user, 'POST')
}
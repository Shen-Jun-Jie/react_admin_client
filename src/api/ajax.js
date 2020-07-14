// 能发送 异步ajax请求的函数模块
// 封装 axios 库
import Axios from 'axios'
import {message} from 'antd'

export default function ajax(url, data={}, method="GET") {
    return new Promise((reslove, reject) => {
        let promise
        if (method === "GET") {
            promise =  Axios.get(url, {
                params: data
            })
        } else {
            promise = Axios.post(url, data)
        }

        promise.then(res => {
            reslove(res)
        }).catch( error => {
            message.error(error.message)
        })
    })
    
}
// 进行Local 数据存储管理的工具

import store from 'store'

const USER_KEY = "user_key"

export default {
    // 保存 user
    saveUser (user) {
        store.set(USER_KEY, user)
    },
    // 获取 user

    getUser () {
        return store.get(USER_KEY) || {}
    },
    // 删除 user

    removeUser() {
        store.remove(USER_KEY)
    }
}
import { login, getInfo, getImg } from '@/api/user.js'
import { getToken, setToken, removeToken, setTime } from '@/utils/auth' // 模板已经存在处理token方法

const state = {
  token: getToken(), // 初始化，获取token
  userInfo: {}
}
const mutations = {
  setToken(state, token) {
    state.token = token // 修改state中数据
    setToken(token) // 修改cookie中数据
  },
  removeToken(state) {
    state.token = null
    removeToken()
  },
  setUserInfo(state, useInfo) {
    state.userInfo = { ...useInfo }
  },
  removeUserInfo(state) {
    state.userInfo = {}
  }
}
const actions = {
  async login(context, data) {
    const result = await login(data)
    context.commit('setToken', result)
    setTime()
  },
  async getInfo(context) {
    const result = await getInfo() // 得到基本信息，且此时有id信息，可以获取用户头像
    const imgResult = await getImg(result.userId)
    const allRes = { ...result, ...imgResult }
    context.commit('setUserInfo', allRes)
    return allRes
  },
  logout(context) {
    context.commit('removeToken')
    context.commit('removeUserInfo')
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

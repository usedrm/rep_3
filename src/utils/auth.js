import Cookies from 'js-cookie'

const TokenKey = 'vue_manage_token'
const TimeKey = 'vue_manage_time'
export function getTime() {
  return Cookies.get(TimeKey)
}
export function setTime() {
  return Cookies.set(TimeKey, Date.now())
}
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

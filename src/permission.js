// import router from './router'
// import store from './store'
// import { Message } from 'element-ui'
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style
// import { getToken } from '@/utils/auth' // get token from cookie
// import getPageTitle from '@/utils/get-page-title'

// NProgress.configure({ showSpinner: false }) // NProgress Configuration

// const whiteList = ['/login'] // no redirect whitelist

// router.beforeEach(async(to, from, next) => {
//   // start progress bar
//   NProgress.start()

//   // set page title
//   document.title = getPageTitle(to.meta.title)

//   // determine whether the user has logged in
//   const hasToken = getToken()

//   if (hasToken) {
//     if (to.path === '/login') {
//       // if is logged in, redirect to the home page
//       next({ path: '/' })
//       NProgress.done()
//     } else {
//       const hasGetUserInfo = store.getters.name
//       if (hasGetUserInfo) {
//         next()
//       } else {
//         try {
//           // get user info
//           await store.dispatch('user/getInfo')

//           next()
//         } catch (error) {
//           // remove token and go to login page to re-login
//           await store.dispatch('user/resetToken')
//           Message.error(error || 'Has Error')
//           next(`/login?redirect=${to.path}`)
//           NProgress.done()
//         }
//       }
//     }
//   } else {
//     /* has no token*/

//     if (whiteList.indexOf(to.path) !== -1) {
//       // in the free login whitelist, go directly
//       next()
//     } else {
//       // other pages that do not have permission to access are redirected to the login page.
//       next(`/login?redirect=${to.path}`)
//       NProgress.done()
//     }
//   }
// })

// router.afterEach(() => {
//   // finish progress bar
//   NProgress.done()
// })
/* 权限控制 */
import router from '@/router' // 导入路由实例
import store from '@/store'
import NProgress from 'nprogress' // 引入进度条实例
import 'nprogress/nprogress.css'
const whiteList = ['/login', '/404'] // 不需要权限可打开
// 导航守卫实现权限控制
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (store.getters.token) {
    if (!store.getters.userid) {
      store.dispatch('user/getInfo')
    }
    if (to.path === '/login') { // 存在时想要去登录页会跳转到主页
      next('/')
    } else next()
  } else {
    if (whiteList.indexOf(to.path) >= 0) {
      next()
    } else {
      next('/login')
    }
  }
  NProgress.done()
})
router.afterEach(() => {
  NProgress.done()
})

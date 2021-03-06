/**
 * 项目入口文件
 */
// 兼容低版本浏览器
import 'babel-polyfill';

// Vue
import Vue from 'vue'

// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// 入口App
import App from './App'

// 路由
import router from './router'

// 状态管理
import store from './store'

// 全局filter
import * as filters from './filters'

// icons
import './icons'

// error log
import './errorLog'

// 权限
import './permission'

// 该项目所有请求使用mockjs模拟
import './mock'

// 中间件
Vue.use(ElementUI)

// 注册全局路由
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// Vue挂载第三方JS库
// 时间格式化
import moment from 'moment'
Object.defineProperty(Vue.prototype,'$moment',{ value: moment })

// lodash工具类
import lodash from 'lodash'
Object.defineProperty(Vue.prototype,'$lodash',{ value: lodash })

// 关闭生产模式下给出的提示
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import './common/stylus/index.styl'
import 'animate.css/animate.css'


Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)

router.push("/goods")

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


console.log(window.devicePixelRatio);
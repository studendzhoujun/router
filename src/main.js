import Vue from 'vue'
import App from './App.vue'
import xiao from './components/xiao.vue'
import hi from './components/hi.vue'
import liu from './components/liu.vue'
import router from './router'
import store from './store/store'
Vue.config.productionTip = false

const Components ={
  xiao,
  hi,
  liu
}

const cmv = {
  install(Vue){
    Object.keys(Components).forEach((key)=>{
       Vue.component(key,Components[key])
    })
  }
}

Vue.use(cmv)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

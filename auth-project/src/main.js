import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style.scss'

/**
 * https://www.figma.com/file/kxyMJIuxZ1pDOvusQxXkyV/Test?node-id=4%3A232
 * https://astralab.notion.site/Middle-Frontend-3948a910e81a42e0bf278e328a98009c
 */

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

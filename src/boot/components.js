// import something here
import Vue from 'vue'

Vue.component('cases-menu', () => import('components/CasesMenu.vue'))
Vue.component('row-with-data', () => import('components/RowWithData/index.vue'))
Vue.component('row-with-state', () => import('components/RowWithState/index.vue'))

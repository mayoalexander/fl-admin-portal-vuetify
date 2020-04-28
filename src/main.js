/*!

=========================================================
* Vuetify Material Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vuetify-material-dashboard
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/vuetify-material-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// Components
import './components'

// Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'
import { fladmin } from '@/utils/fladmin'

import dayjs from 'dayjs'

import LoadingSpinner from '@/components/helper/LoadingSpinner'
import SelectedMediaCard from '@/components/Dashboard/SelectedMediaCard'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.component('selected-media-card', SelectedMediaCard)
Vue.component('loading-spinner', LoadingSpinner)

Vue.use(VueSweetalert2)

Vue.prototype.$fladmin = fladmin
Vue.prototype.$dayjs = dayjs

// Sync store with router
sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

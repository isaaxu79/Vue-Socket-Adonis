import Vue from 'vue'
import Router from 'vue-router'

//import Indice from './components/Indice.vue'
import NewBackup from './components/NewBackup.vue'
import Home from './components/Home.vue'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        name: "home",
        component: Home
      },
      {
        path: "/nuevo",
        name: "nuevo",
        component: NewBackup
      },
    ]
  });
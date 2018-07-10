import Vue from 'vue'
import Router from 'vue-router'
import Drive from '@/components/Drive'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Drive',
      name: 'Drive',
      component: Drive
    }
  ]
})

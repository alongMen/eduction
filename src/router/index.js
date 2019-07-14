import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index'
import home from '@/views/home/index.vue'
import login from '@/views/login'
import subject from '@/views/courseinfo/grade/subject'
import tests from '@/views/courseinfo/grade/tests'
import learnstyle from '@/views/courseinfo/learnstyle/learnstyle'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: login,
      name: 'login',
    },
    { path: '/',
      component: index,
      name: 'index',
      redirect: {name: 'home'},
      meta: { title: '主入口' },
      children: [
        { path: '/home', component: home, name: 'home', meta: { title: '首页' } },
      ]
    }
  ]
})

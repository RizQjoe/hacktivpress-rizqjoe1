import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Articles from '@/components/Articles'
import ArticleDetail from '@/components/ArticleDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          component: Articles
        },
        {
          name: 'Details',
          path: '/details/:id',
          component: ArticleDetail,
          props: true
        }
      ]
    }
  ]
})

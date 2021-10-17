import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//路由懒加载
const Home = () => import('../views/home/home');
const Cgy = () => import('views/cgy/cgy');
const Pfile = () => import('views/pfile/pfile');
const Star = () => import('views/star/star');


const routes = [
    {
      path: '',
			redirect:'/home',
    },
		{
			path:'/home',
			component:Home,
      meta:{
        title:'首页'
      }
		},
		{
			path:'/cgy',
			component:Cgy,
      meta:{
        title:'分类'
      }
		},
		{
			path:'/pfile',
			component:Pfile,
      meta:{
        title:'我的'
      }
		},
		{
			path:'/star',
			component:Star,
      meta:{
        title:'收藏'
      }
		},
  ];

const router = new Router({
  routes,
	mode: 'history'
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
});

export default router;

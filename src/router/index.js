import Vue from 'vue'
import VueRouter from 'vue-router'
import LogIn from '../components/LogIn' 
import Home from "../components/New_Home"
// import { nextTick } from 'vue/types/umd'
Vue.use(VueRouter)
// eslint-disable-next-line no-unused-vars
const routes = [
 LogIn,Home
]

const router = new VueRouter({
 routes:[
 {path:'/',redirect:'/login'},
{path:'/login',component:LogIn},
{path:'/home',component:Home}
 ]
})
 router.beforeEach((to,from,next)=>{
    //to代表访问路径
    //from代表从哪个路径跳转来
    //next是一个函数，表示放行或者跳转
    //next()留空，放行，next('/login')强制跳转到/login
    if(to.path ==='/login')return next();
    //如果访问的是登录页，直接放行
    const tokenStr =window.sessionStorage.getItem('token');
    //获取token
    if(!tokenStr)return next('/login');
    //查看token是否存在
    next();
    //如果存在。则放行
 })
 export default router
 //如果是以下形式，记得释去掉(){}
//  export default router()
// (
//  export是返回的一个router的路由
// )
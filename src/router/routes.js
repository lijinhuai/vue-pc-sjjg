const Login = resolve => require(['pages/Login'], resolve)
const Home = resolve => require(['components/Home'], resolve)

// import Welcome from 'pages/Welcome'
const Zhjg = resolve => require(['pages/zhjg/index'], resolve)
const Yryd = resolve => require(['pages/yryd/index'], resolve)
const Wjw = resolve => require(['pages/wjw/index'], resolve)
const Fxyp = resolve => require(['pages/fxyp/index'], resolve)
const Znyj = resolve => require(['pages/znyj/index'], resolve)

const routes = [{
  path: '/',
  redirect: '/login'
},
{
  path: '/home',
  component: Home,
    /*  meta: {
         requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
     }, */
  children: [{
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/welcome',
    redirect: '/zhjg'
  },
  {
    path: '/zhjg',
    component: Zhjg
  },
  {
    path: '/yryd',
    component: Yryd
  },
  {
    path: '/wjw',
    component: Wjw
  },
  {
    path: '/fxyp',
    component: Fxyp
  },
  {
    path: '/znyj',
    component: Znyj
  }
  ]
},
{
  path: '/login',
  name: 'Login',
  component: Login
}
]

export default routes

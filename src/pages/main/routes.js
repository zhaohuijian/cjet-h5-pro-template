import { lazy } from 'react';

const Home = lazy(() => import('./routes/home'))
const User = lazy(() => import('./routes/user'))
const Form = lazy(() => import('./routes/form'))

const Routes = [
  { path: '/user', name: 'User', component: User },
  { path: '/form', name: 'Form', component: Form },

  /**
   * 首页 注意：根必须放在最后一个
   */
  { path: '/', name: 'home', component: Home }
]

export default Routes

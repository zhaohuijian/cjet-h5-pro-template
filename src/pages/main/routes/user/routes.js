import { lazy } from 'react';

const Phone = lazy(() => import('./routes/phone'))
const Login = lazy(() => import('./routes/login'))
const Register = lazy(() => import('./routes/register'))

const Routes = [
  { path: '/user/phone', name: 'Phone', component: Phone },
  { path: '/user/login', name: 'Login', component: Login },
  { path: '/user/register', name: 'Register', component: Register }
]

export default Routes

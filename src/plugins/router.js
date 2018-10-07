import Vue from 'vue'
import VueRouter from 'vue-router'

import Projects from '@/components/Projects'
import Profile from '@/components/Profile'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'

Vue.use(VueRouter)  

export default new VueRouter({
  mode: "history",
  routes:[{
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: SignIn
  }
]
})
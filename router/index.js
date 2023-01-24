import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import Admin from '../pages/admin/Admin.vue'
import Reports from '../pages/admin/Reports.vue'
import AddVisitor from '../pages/admin/AddVisitor.vue'
import EditVisitor from '../pages/admin/EditVisitor'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children:[
      {
        path:'Reports',
        name: 'Reports',
        component: Reports
      },
      {
        path: 'Reports/create',
        name: 'AddVisitor',
        component: AddVisitor
      },
      {
        path: 'Reports/:id/edit',
        name: 'EditVisitor',
        component: EditVisitor,
        props:true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

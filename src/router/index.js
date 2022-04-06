
import {createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Create from '../pages/Create.vue'
import Show from '../pages/Show.vue'


 const routes= [
    {
        path: '/create',
        name: 'Create',
        component: Create
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/:id',
        name: 'Info Carte',
        component: Show
    },
    
  ]

export default createRouter({
    history: createWebHistory(),
    routes
})
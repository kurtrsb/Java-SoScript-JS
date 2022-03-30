
import {createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Create from '../pages/Create.vue'


 const routes= [
    {
        path: '/create',
        name: 'Create',
        component: Create
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/home/:id',
        name: 'Info Carte',
        component: Home
    },
    
  ]

export default createRouter({
    history: createWebHistory(),
    routes
})
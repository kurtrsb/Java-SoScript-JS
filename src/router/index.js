
import {createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Create from '../pages/Create.vue'
import Show from '../pages/Show.vue'
import Modify from '../pages/Modify.vue'
import List from '../pages/List.vue'


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
    {
        path: '/edit/:id',
        name: 'Modifier la Carte',
        component: Modify
    },
    {
        path: '/list',
        name: 'Listing',
        component: List
    },
    
  ]

export default createRouter({
    history: createWebHistory(),
    routes
})
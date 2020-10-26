import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/notes',
        name: 'Notes',
        component: () => import(/* webpackChunkName: "about" */ '../views/Notes.vue'),

    },
    {
        path: '/notes/add-note',
        name: 'addNote',
        component: () => import(/* webpackChunkName: "about" */ '../views/AddNote.vue')
    },
    {
        path: '/chat',
        name: 'Chat',
        component: () => import(/* webpackChunkName: "about" */ '../views/ChatView.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

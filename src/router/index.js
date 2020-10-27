import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {auth} from '../common/firebase'
import store from "../store/index"
import {SET_USER, SET_LOGGED_IN} from "../store/mutations.types";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import("../views/LoginView")
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/notes',
        name: 'Notes',
        component: () => import(/* webpackChunkName: "about" */ '../views/Notes.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/notes/add-note',
        name: 'addNote',
        component: () => import(/* webpackChunkName: "about" */ '../views/AddNote.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/chat',
        name: 'Chat',
        component: () => import(/* webpackChunkName: "about" */ '../views/ChatView.vue'),
        meta: {
            requiresAuth: true
        }
    }

]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if (requiresAuth) {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                store.commit(SET_USER, user)
                store.commit(SET_LOGGED_IN, true)
                next()
            } else {
                router.push('/')
            }
        });
    } else {
        next()
    }
})

export default router

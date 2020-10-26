import {SET_LOGGED_IN, SET_USER} from "../mutations.types";
import {LOGIN, GET_USER_DATA, REGISTER, LOG_OUT} from "../actions.types"
import * as fb from '../../common/firebase'
import router from '../../router/index'

export default {
    state: {
        user: {
            loggedIn: false,
            data: null
        }
    },
    mutations: {
        [SET_LOGGED_IN]: (state, value) => state.user.loggedIn = value,
        [SET_USER]: (state, data) => state.user.data = data
    },
    actions: {
        async [LOGIN]({dispatch}, form) {
            const {user} = await fb.auth.signInWithEmailAndPassword(form.email, form.password)
            dispatch(GET_USER_DATA, user)
        },
        async [GET_USER_DATA]({commit}, user) {
            const userProfile = await fb.usersCollection.doc(user.uid).get()
            commit(SET_LOGGED_IN, true)
            commit(SET_USER, userProfile.data())
            router.push('home')
        },
        async [REGISTER]({dispatch}, form) {
            const {user} = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)
            await fb.usersCollection.doc(user.uid).set({
                name: form.name,
                email: form.email,
                password: form.password
            })
            dispatch(GET_USER_DATA, user)
        },
        async [LOG_OUT]({commit}) {
            await fb.auth.signOut()
            commit(SET_LOGGED_IN, false)
            // clear userProfile and redirect to /login
            commit(SET_USER, {})
            router.push('/')
        }
    }
}
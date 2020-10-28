import {SET_NOTE, SET_NOTES, SET_EDIT_MODE,CLEAR_NOTE} from "../mutations.types";
import {GET_NOTES, GET_NOTE, CREATE_NOTE, UPDATE_NOTE, REMOVE_NOTE} from "../actions.types";
import * as fb from '../../common/firebase'

export default {
    state: {
        notes: [],
        note: {},
        isEditMode: false
    },
    mutations: {
        [SET_NOTE]: (state, noteID) => state.note = state.notes.find(note => note.id === noteID),
        [CLEAR_NOTE]: state => state.note = {},
        [SET_NOTES]: (state, notes) => state.notes = notes,
        [SET_EDIT_MODE]: (state, editMode) => state.isEditMode = editMode
    },
    actions: {
        [GET_NOTES]({commit}) {
            fb.notesCollection.orderBy('createdAt', 'desc').onSnapshot(snapshot => {
                let notes = []
                snapshot.forEach(doc => {
                    let note = doc.data()
                    note.id = doc.id

                    notes.push(note)
                })
                console.log('GET NOTES')
                console.log(notes)
                commit(SET_NOTES, notes)
            })
        },
        [GET_NOTE]({commit}, noteID) {
            commit(SET_NOTE, noteID)
        },
        async [CREATE_NOTE]({state, commit, dispatch}, note) {
            await fb.notesCollection.add({
                createdAt: new Date(),
                content: note.content,
                updatedAt: "26 października 2020 14:00:00 UTC+1"
            })
            dispatch(GET_NOTES)
        },
        async [UPDATE_NOTE]({dispatch}, note) {
            await fb.notesCollection.doc(note.id).update({
                ...note
            })
            console.log('store')
            console.log(note)
            dispatch(GET_NOTES)
        },
        async [REMOVE_NOTE]({dispatch}, noteID) {
            await fb.notesCollection.doc(noteID).delete()
            dispatch(GET_NOTES)
        }
    }
}
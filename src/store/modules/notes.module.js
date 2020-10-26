import {SET_NOTE, SET_NOTES} from "../mutations.types";
import {GET_NOTES, GET_NOTE} from "../actions.types";

export default {
    state: {
        notes: [],
        note: {}
    },
    mutations: {
        [SET_NOTE]: (state, noteID) => state.note = state.notes.find(note => note.id === noteID),
        [SET_NOTES]: (state, notes) => state.notes = notes
    },
    actions: {
        [GET_NOTES]({commit}) {

            commit(SET_NOTES, NOTES)
        },
        [GET_NOTE]({commit}, noteID) {
            commit(SET_NOTE, noteID)
        }
    }
}


const NOTES = [
    {
        id: 1,
        content: "Hello there content"
    },
    {
        id: 2,
        content: "Hello there content 2"
    },
    {
        id: 3,
        content: "Hello there content 3"
    }
];
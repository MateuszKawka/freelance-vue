import {SET_NOTES, SET_SCHEDULES} from "../mutations.types";
import {GET_SCHEDULES, ADD_SCHEDULE, GET_NOTES} from "../actions.types";
import * as fb from '../../common/firebase'

export default {
    state: {
        schedules: []
    },
    mutations: {
        [SET_SCHEDULES]: (state, schedules) => state.schedules = schedules
    },
    actions: {
        async [GET_SCHEDULES]() {
            await fb.schedulesCollection.orderBy('createdAt', 'desc').onSnapshot(snapshot => {
                let schedules = []
                snapshot.forEach(doc => {
                    let schedule = doc.data()
                    schedule.id = doc.id

                    schedules.push(schedule)
                })
                commit(SET_SCHEDULES, schedules)
            })
        },
        async [ADD_SCHEDULE]({dispatch}, schedule) {
            await fb.schedulesCollection.add({
                createdAt: new Date(),
                ...schedule
            })
            dispatch(GET_SCHEDULES)
        }

    }
}
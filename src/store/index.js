import Vue from "vue";
import Vuex from "vuex";

import home from "./modules/home.module";
import chat from "./modules/chat.module";
import calendar from "./modules/calendar.module";
import notes from "./modules/notes.module";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        home,
        chat,
        calendar,
        notes
    }
});
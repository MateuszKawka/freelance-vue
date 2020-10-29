<template>
  <div class="columns is-multiline is-centered box">
    <div class="column is-11 has-text-left">
      <b-button size="is-small" @click.native="setToday" class="mr-4">Today</b-button>
      <b-button size="is-small" icon-right="arrow-left-bold" @click.native="calendarPrev"></b-button>
      <CalendarViewsPicker @viewChange="setView" class="mx-1"/>
      <b-button size="is-small" icon-right="arrow-right-bold" @click.native="calendarNext"></b-button>
    </div>
    <div class="column is-11">
      <div class="columns">
        <div class="column is-3">
          <b-button>Add schedule</b-button>
          <div>
            <div class="field mt-4">
              <b-button size="is-small" @click.native="setAllCalendars"> Show all</b-button>
            </div>
            <div class="field" v-for="calendar in calendarList" :key="calendar.id">
              <b-checkbox :native-value="calendar.name" v-model="pickedCalendars" size="is-small">{{ calendar.name }}</b-checkbox>
            </div>
          </div>
        </div>
        <div class="column is-9">
          <span class="calendar-week-dayname-name"><span>{{ $date(currentDate).format('DD/MM/YYYY') }}</span></span>
          <Calendar :calendars="calendarList" :view="view" :taskView="taskView" :schedules="scheduleList"
                    @beforeCreateSchedule="addSchedule"
                    ref="calendar" :scheduleView="scheduleView"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'tui-calendar/dist/tui-calendar.css'
import {Calendar} from '@toast-ui/vue-calendar'
import CalendarViewsPicker from "./CalendarViewsPicker";

import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

export default {
  name: "CalendarComponent",
  components: {
    Calendar,
    CalendarViewsPicker
  },
  data() {
    return {
      view: "month",
      pickedCalendars: [],
      calendarList: [
        {
          id: '0',
          name: 'Main'
        },
        {
          id: '1',
          name: 'Work'
        },
        {
          id: '2',
          name: 'Home'
        }
      ],
      taskView: false,
      scheduleView: false,
      scheduleList: [
        {
          id: '1',
          calendarId: '1',
          title: 'Zrobić zakupy',
          category: 'time',
          dueDateClass: '',
          start: '2020-10-18T22:30:00+09:00',
          end: '2020-10-19T02:30:00+09:00'
        }
      ],
      tasksList: [],
      currentDate: ''
    }
  },
  watch: {
    scheduleList(newSchedules) {
      this.createSchedules(newSchedules)
      console.log('watch')
    }
  },
  methods: {
    setView(view) {
      this.view = view
    },
    addSchedule(e) {
      const schedule = {
        id: this.scheduleList.length,
        calendarId: e.calendarId,
        title: e.title,
        category: "time",
        start: e.start["_date"].toISOString(),
        end: e.end["_date"].toISOString(),
        state: e.state
      }
      this.scheduleList.push(schedule)
      console.log(this.scheduleList)
    },
    calendarPrev() {
      this.$refs.calendar.invoke('prev')
    },
    calendarNext() {
      this.$refs.calendar.invoke('next')
      this.getCurrentDate()
    },
    setToday() {
      this.$refs.calendar.invoke('today')
    },
    getCurrentDate() {
      this.currentDate = this.$refs.calendar.invoke('getDate')['_date']
    },
    createSchedules(schedules) {
      this.$refs.calendar.invoke('createSchedules', schedules);
    },
    beforeCreateSchedule() {

    },
    setAllCalendars() {
      this.pickedCalendars = this.calendarList.map(item => item.name)
    }
  },
  mounted() {
    this.getCurrentDate()

  },
  updated() {
    this.getCurrentDate()
  }
}
</script>

<style scoped>

</style>
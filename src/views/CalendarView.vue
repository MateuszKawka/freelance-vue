<template>
  <div class="columns is-multiline is-centered">
    <div class="column is-10 is-offset-1">
      <Calendar />
    </div>
  </div>
</template>
<script>
import Calendar from "../components/modules/calendar/Calendar";
export default {
  name: "CalendarView",
  components: {
    Calendar
  }
}
</script>
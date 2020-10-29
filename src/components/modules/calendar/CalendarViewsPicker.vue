<template>
  <b-dropdown aria-role="list" v-model="view">
    <button class="button is-primary is-small" slot="trigger" slot-scope="{ active }">
      <span>{{ view }}</span>
      <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
    </button>

    <b-dropdown-item aria-role="listitem" value="day">Day</b-dropdown-item>
    <b-dropdown-item aria-role="listitem" value="week">Week</b-dropdown-item>
    <b-dropdown-item aria-role="listitem" value="month">Month</b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  name: "CalendarViewsPicker.vue",
  data() {
    return {
      view: "month"
    }
  },
  watch: {
    view(view) {
      this.$emit('viewChange', view)
    }
  }
}
</script>

<style scoped>

</style>
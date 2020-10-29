<template>
  <div>
    <b-button size="is-small" icon-right="arrow-left-bold" @click.native="prev">Prev</b-button>
    <slot></slot>
    <b-button size="is-small" icon-right="arrow-right-bold" @click.native="next">Next</b-button>
  </div>
</template>

<script>
export default {
  name: "CalendarControl.vue",
  methods: {
    prev() {
      this.$emit("prev")
    },
    next() {
      this.$emit('next')
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <PerfectScrollbar ref="scrollbar" :options="options" :style="{ height: height }">
    <slot/>
  </PerfectScrollbar>
</template>

<script>
import {PerfectScrollbar} from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

export default {
  name: "PerfectScrollbarWrapper.vue",
  data() {
    return {
      options: {
        minScrollbarLength: 100
      },
    }
  },
  props: {
    height: {
      type: String,
      default: '100vh'
    }
  },
  components: {
    PerfectScrollbar
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
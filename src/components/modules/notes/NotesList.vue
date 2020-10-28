<template>
  <ul class="is-fixed">
    <PerfectScrollbarWrapper height="60vh" :options="options">
      <NotePreview @click="emitClick" v-for="noteItem in notes" :key="noteItem.id" :note="noteItem" :active="note.id === noteItem.id" />
    </PerfectScrollbarWrapper>
  </ul>
</template>

<script>
import NotePreview from "./NotePreview"
import {mapState} from "vuex"
import PerfectScrollbarWrapper from "../../PerfectScrollbarWrapper";
export default {
  name: "NotesList.vue",
  data() {
    return {
      options: {
        wheelPropagation: true
      }
    }
  },
  computed: {
    ...mapState({
      notes: state => state.notes.notes,
      note: state => state.notes.note
    })
  },
  methods: {
    emitClick() {
      this.$emit('clicked')
    }
  },
  components: {
    NotePreview,
    PerfectScrollbarWrapper
  }
}
</script>
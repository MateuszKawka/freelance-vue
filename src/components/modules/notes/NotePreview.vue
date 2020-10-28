<template>
  <div class="card is-pointer is-shadowless is-bordered" :class="{'card--active': active}" @click="openNote">
    <div class="card-content" :class="{'note-active': active}">
      <p class="title is-6">
        {{ noteTitle }}
      </p>
      <p class="subtitle is-6">
        <span> 20.04.2020</span>
        <span> all</span>
      </p>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex"
import {GET_NOTE} from "../../../store/actions.types";
import {SET_EDIT_MODE} from "../../../store/mutations.types";
import {getNoteTitle} from "../../../common/helpers";

export default {
  name: "NotePreview",
  data() {
    return {
      noteTitle: ""
    }
  },
  props: {
    note: {
      type: Object,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapActions({
      getNote: GET_NOTE
    }),
    openNote() {
      this.$store.commit(SET_EDIT_MODE, false)
      this.getNote(this.note.id)
    },
    getTitle() {
      this.noteTitle = getNoteTitle(this.note.content)
    }
  },
  mounted() {
    this.getTitle()
  }
}
</script>

<style scoped>
.note-active {
  border-left: 3px solid #4357AD;
}
</style>
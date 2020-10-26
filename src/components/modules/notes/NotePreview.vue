<template>
  <div class="card is-pointer" :class="{'card--active': active}" @click="openNote">
    <div class="card-content">
      <p class="title is-6">
        {{ note.content }}
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

export default {
  name: "NotePreview",
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
      this.getNote(this.note.id)
    }
  }
}
</script>

<style scoped>
.card--active {
  background: #f4f4f4;
}

.card:hover {
  background: #f4f4f4;
}
</style>
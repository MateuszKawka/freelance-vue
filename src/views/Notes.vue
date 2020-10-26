<template>
  <div>
    <NotesSettings/>
    <div class="columns is-multiline">
      <div class="column is-12 has-text-right">
        <AddNoteButton/>
      </div>
      <div class="column is-6">
        <p>Notes</p>
        <NotesList @emitClick="pickNote"/>
      </div>
      <div class="column is-6">
        <Note v-if="isNotePicked"/>

        <p class="has-text-centered" v-else>
          Select note from list or create new !
          <AddNoteButton />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NotesList from "@/components/modules/notes/NotesList";
import Note from "@/components/modules/notes/Note";
import NotesSettings from "@/components/modules/notes/NotesSettings";
import AddNoteButton from "../components/modules/notes/AddNoteButton";
import {mapActions} from "vuex";
import {GET_NOTES} from "../store/actions.types";

export default {
  name: "Notes",
  components: {
    NotesList,
    Note,
    NotesSettings,
    AddNoteButton
  },
  data() {
    return {
      showAddNode: false,
      note: false
    }
  },
  computed: {
    isNotePicked() {
      return (Object.keys(this.$store.state.notes.note).length > 0)
    }
  },
  methods: {
    ...mapActions({
      getNotes: GET_NOTES
    }),
    pickNote() {
      this.note = !this.note;
    },
    removeNote() {
      console.log('remove')
    }
  },
  mounted() {
    this.getNotes()
    this.removeNote()
  }
}
</script>

<style scoped>

</style>
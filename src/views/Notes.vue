<template>
  <div class="container">
    <div class="box is-shadowless has-background-white-ter">
      <NotesSettings/>
    </div>
    <div class="columns is-multiline">
      <div class="column" :class="notesListVisible ? 'is-4': 'is-1'">
        <p class="is-flex is-justify-content-flex-start is-pointer mb-5">
          <span class="pr-2">Notes</span>
          <b-icon
              :icon="notesListVisible? 'arrow-collapse-horizontal' : 'arrow-expand-horizontal'"
              @click.native="hideNotesList">
          </b-icon>
        </p>
        <div>
          <div class="card" v-show="notesListVisible">
            <NotesList @emitClick="pickNote"/>
          </div>
          <b-button @click="addNote" size="is-small" type="is-primary" icon-right="playlist-plus" v-show="notesListVisible" class="mt-4">Add note</b-button>
        </div>
      </div>
      <div class="column" :class="notesListVisible ? 'is-8': 'is-12'">
        <Note v-if="isNotePicked"/>
        <AddNote class="mt-6" v-else></AddNote>
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
import {CLEAR_NOTE} from "../store/mutations.types";
import AddNote from "../components/modules/notes/AddNote";
export default {
  name: "Notes",
  components: {
    NotesList,
    Note,
    NotesSettings,
    AddNoteButton,
    AddNote
  },
  data() {
    return {
      showAddNode: false,
      note: false,
      notesListVisible: true
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
    },
    hideNotesList() {
      this.notesListVisible = !this.notesListVisible
    },
    addNote() {
      this.$store.commit(CLEAR_NOTE)
    }
  },
  mounted() {
    this.getNotes()
  }
}
</script>

<style scoped>

</style>
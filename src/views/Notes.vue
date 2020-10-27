<template>
  <div>
    <NotesSettings/>
    <div class="columns is-multiline">
      <div class="column is-12 has-text-right">
        <AddNoteButton/>
      </div>
      <div class="column has-text-right is-offset-1" :class="notesListVisible ? 'is-4': 'is-1'">
        <b-icon
            :icon="notesListVisible? 'arrow-collapse-horizontal' : 'arrow-expand-horizontal'"
            @click.native="hideNotesList">
        </b-icon>
        <div class="box" v-show="notesListVisible">
          <NotesList @emitClick="pickNote"/>
        </div>
      </div>
      <div class="column is-offset-1" :class="notesListVisible ? 'is-5': 'is-8'">
        <Note v-if="isNotePicked"/>
        <p class="has-text-centered" v-else>
          Select note from list or create new !
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
    }
  },
  mounted() {
    this.getNotes()
  }
}
</script>

<style scoped>

</style>
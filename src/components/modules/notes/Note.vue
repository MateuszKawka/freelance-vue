<template>
  <div>
    <div class="card mt-0 pb-5 pt-2 px-5">
      <div class="has-text-right mb-4">
        <b-button type="is-danger"
                  icon-right="delete-outline"
                  size="is-small"
                  @click.native="removeNote"
        >
          Delete
        </b-button>
        <b-button type="is-success"
                  icon-right="pencil-outline"
                  v-if="!isEditMode"
                  @click.native="editNote"
                  size="is-small"
                  class="ml-4"
        >
          Edit
        </b-button>
        <!--      <b-icon icon="pencil-outline is-clickable" @click.native="editNote" @click="editNote" custom-size="mdi-18px"></b-icon>-->
        <!--      <b-icon icon="delete-outline" @click.native="removeNote" custom-size="mdi-18px"></b-icon>-->
        <!--      <b-icon icon="close-circle-outline" @click.native="back" class="is-pointer" custom-size="mdi-18px"></b-icon>-->
      </div>
      <Viewer previewStyle="tab" @change="change" :initialValue="note.content" ref="mdViewer" v-if="!isEditMode"/>

      <div class="note-editor" v-else>
        <Editor previewStyle="tab" :initialValue="note.content" ref="mdEditorEdit" @change="change"/>
        <b-button @click="saveNote" size="is-small" type="is-success" class="mt-3" icon-right="content-save">Save</b-button>
        <b-button type="is-warning"
                  icon-right="close-circle-outline"
                  v-if="isEditMode"
                  @click.native="back"
                  size="is-small"
                  class="ml-4 mt-3"
        >
          Cancel
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import {mapState} from "vuex"
import {Viewer, Editor} from '@toast-ui/vue-editor';
import {SET_EDIT_MODE, SET_NOTE} from "../../../store/mutations.types";
import {REMOVE_NOTE, UPDATE_NOTE} from "../../../store/actions.types";

export default {
  name: "Note",
  components: {
    Viewer,
    Editor
  },
  data() {
    return {
      newContent: ""
    }
  },
  methods: {
    change(e) {
      this.newContent = this.$refs.mdEditorEdit.invoke('getMarkdown');
    },
    back() {
      this.$store.commit(SET_EDIT_MODE, false)
    },
    editNote() {
      this.$store.commit(SET_EDIT_MODE, !this.isEditMode)
    },
    saveNote() {
      const note = {
        ...this.note,
        content: this.newContent
      }
      this.$store.dispatch(UPDATE_NOTE, note).then(() => {
        this.$toasted.show('Note successful updated', {
          icon: 'check',
          theme: "bubble",
          position: "top-center",
          duration: 2000
        })
      })
    },
    removeNote() {
      this.$swal('Are you sure?', {
        buttons: {
          no: {
            text: "No",
            value: false
          },
          yes: {
            text: "Yes, delete it.",
            value: true
          }
        }
      })
          .then((value) => {
            if (value) {
              this.$store.dispatch(REMOVE_NOTE, this.note.id).then(() => {
                this.$store.commit(SET_NOTE, {})
              })
            }
          })
    }
  },
  computed: {
    ...mapState({
      note: state => state.notes.note,
      isEditMode: state => state.notes.isEditMode
    })
  },
  watch: {
    note(note) {
      this.$refs.mdViewer.invoke('setMarkdown', note.content)
    }
  }
}
</script>
<template>
  <div class="container">
    <b-icon icon="close-circle-outline" size="is-medium" @click.native="backToNotes" class="is-pointer"></b-icon>
    <Editor v-model="content" previewStyle="tab" @change="change" ref="toastuiEditor" class="mt-6"/>
    <b-button @click.native="addNote">Add note</b-button>
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import {Editor} from '@toast-ui/vue-editor';
import {CREATE_NOTE} from "../../../store/actions.types";

export default {
  name: "AddNote",
  data() {
    return {
      content: ""
    }
  },
  components: {
    Editor
  },
  methods: {
    change(e) {
      this.content = this.$refs.toastuiEditor.invoke('getMarkdown');
    },
    addNote() {
      let note = {
        content: this.content
      }
      this.$store.dispatch(CREATE_NOTE, note)
    },
    backToNotes() {
      this.$router.push('/notes')
    }
  }
}
</script>
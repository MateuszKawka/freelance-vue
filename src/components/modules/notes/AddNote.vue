<template>
  <div class="container">
    <Editor v-model="content" previewStyle="tab" @change="change" ref="toastuiEditor"/>
    <b-button @click="addNote" size="is-small" type="is-success" class="mt-3" icon-right="content-save">Save</b-button>
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
      this.$emit('cancel')
    }
  }
}
</script>
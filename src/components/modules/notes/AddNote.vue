<template>
  <div>
    <b-button tag="router-link" to="/notes" size="is-small">Back to notes</b-button>
    <Editor v-model="content" previewStyle="tab" @change="change"  ref="toastuiEditor"/>
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/vue-editor';

export default {
  name: "AddNote",
  components: {
    Editor
  },
  methods: {
    change(e) {
      let html = this.$refs.toastuiEditor.invoke('getMarkdown');
     console.log(html)
    }
  },
  data() {
    return {
      content: '',
    }
  }
}
</script>
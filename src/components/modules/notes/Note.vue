<template>
  <div>
    <Viewer previewStyle="tab" @change="change" :initialValue="note.content"/>
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import {mapState} from "vuex"
import { Viewer } from '@toast-ui/vue-editor';

export default {
  name: "Note",
  components: {
    Viewer
  },
  methods: {
    change(e) {
      console.log(e.value)
    }
  },
 computed: {
   ...mapState({
     note: state => state.notes.note
   })
  }
}
</script>
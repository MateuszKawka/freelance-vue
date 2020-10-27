<template>
  <b-button @click="addNote" size="is-small" type="is-primary">Add note</b-button>
</template>

<script>
export default {
  name: "AddNoteButton.vue",
  methods: {
    addNote() {
      this.$router.push('/notes/add-note')
    }
  }
}
</script>

<style scoped>

</style>
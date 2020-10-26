<template>
  <b-field label="Option">
    <b-radio-button v-model="radioButton"
                    native-value="No"
                    size="is-small"
                    type="is-danger">
      <b-icon icon="close"></b-icon>
      <span>No</span>
    </b-radio-button>

    <b-radio-button v-model="radioButton"
                    native-value="Yes"
                    size="is-small"
                    type="is-success">
      <b-icon icon="check"></b-icon>
      <span>Yes</span>
    </b-radio-button>
  </b-field>
</template>

<script>
export default {
  name: "NotesSettingsCheckbox.vue",
  data() {
    return {
      radioButton: false
    }
  }

}
</script>

<style scoped>

</style>
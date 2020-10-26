<template>
  <b-dropdown aria-role="list" :close-on-click="false">
    <b-icon
        icon="cog"
        size="is-small"
        slot="trigger" slot-scope="{ active }"
    >
    </b-icon>

    <b-dropdown-item aria-role="listitem">
      <NotesSettingsCheckbox/>
    </b-dropdown-item>
    <b-dropdown-item aria-role="listitem">
      <NotesSettingsCheckbox/>
    </b-dropdown-item>
    <b-dropdown-item aria-role="listitem">
      <NotesSettingsCheckbox/>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import NotesSettingsCheckbox from "./NotesSettingsCheckbox";

export default {
  name: "NotesSettings",
  components: {
    NotesSettingsCheckbox
  }
}
</script>

<style scoped>

</style>
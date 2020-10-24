<template>
  <div id="app">
    <div class="columns">
      <div class="column is-2">
        <Menu/>
      </div>
      <div class="column is-9">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu";

export default {
  components: {
    Menu
  }
}
</script>
<template>
  <div id="app" class="">
    <div class="columns">
      <div class="column is-2">
        <Menu/>
      </div>
      <div class="column is-9 is-relative">
        <div v-if="isLoading">
          <Loader/>
        </div>
        <div v-else>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu";
import Loader from "./components/UI/Loader";

export default {
  components: {
    Menu,
    Loader
  },
  computed: {
    isLoading() {
      return false;
    }

  }
}
</script>
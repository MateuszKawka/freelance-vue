<template>
  <div id="app" class="has-background-light">
    <div class="container is-fluid is-paddingless">
      <div class="columns is-centered">
        <div class="column is-2 has-background-white pl-2 pr-0" v-if="loggedIn">
          <Menu/>
        </div>
        <div class="column is-10 is-fullheight is-relative" >
          <div v-if="isLoading">
            <Loader/>
          </div>
          <div v-else class="pt-5">
            <router-view/>
          </div>
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
    },
    loggedIn() {
      return this.$store.state.auth.user.loggedIn
    }

  }
}
</script>
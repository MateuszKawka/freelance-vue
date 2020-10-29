<template>
  <div id="app" class="has-background-light">
    <div class="container is-fluid is-paddingless">
      <div class="columns is-centered">
        <div v-if="loggedIn">
          <Menu/>
        </div>
        <div class="column is-fullheight is-relative" :class="menuReduced ? 'is-11' : 'is-9'">
          <div v-if="isLoading">
            <Loader/>
          </div>
          <div v-else class="pt-5">
            <transition name="fade" mode="out-in">
            <router-view/>
            </transition>
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
    },
    menuReduced() {
      return this.$store.state.menuReduce
    }

  }
}
</script>
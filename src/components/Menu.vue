<template>
  <div class="sidebar-menu">
    <b-sidebar
        :fullheight="fullheight"
        :reduce="reduce"
        type="is-light"
        open
        position="static"
    >
      <p class="has-text-right m-0 pt-2 pr-2 is-pointer">
        <b-icon :icon="reduce ? 'arrow-expand-horizontal' : 'arrow-collapse-horizontal'"
                @click.native="bindReduce"></b-icon>
      </p>
      <ProfilePreview :reduce="reduce"/>
      <b-menu>
        <div class="mt-5">
          <b-menu-list>

            <b-menu-item tag="router-link" :icon="menuItem.icon" :label="menuItem.label" :to="menuItem.path"
                         class="is-radiusless"
                         v-for="menuItem in MENU_ITEMS" :key="menuItem.label">
            </b-menu-item>
            <b-menu-item icon="location-exit" label="Log out" @click.native="logout"
                         class="is-radiusless"></b-menu-item>
          </b-menu-list>
        </div>
      </b-menu>
    </b-sidebar>
  </div>
</template>

<script>
import ProfilePreview from "@/components/ProfilePreview"
import {LOG_OUT} from "../store/actions.types";
import {BIND_MENU_REDUCE} from "../store/mutations.types";

export default {
  name: "Menu",
  components: {
    ProfilePreview
  },
  computed: {
    reduce() {
      return this.$store.state.menuReduce
    }
  },
  methods: {
    logout() {
      this.$store.dispatch(LOG_OUT)
    },
    bindReduce() {
      this.$store.commit(BIND_MENU_REDUCE)
    }
  },
  data() {
    return {
      MENU_ITEMS,
      open: true,
      fullheight: true
    }
  }
}


const MENU_ITEMS = [
  {
    label: "Home",
    path: "/home",
    icon: "home"
  },
  {
    label: "Chat",
    path: "/chat",
    icon: "message-bulleted"
  },
  {
    label: "Notes",
    path: "/notes",
    icon: "note-multiple-outline"
  },
  {
    label: "Works",
    path: "/works",
    icon: "briefcase-outline"
  },
  {
    label: "Finances",
    path: "/finances",
    icon: "finance"
  },
  {
    label: "Calendar",
    path: "/calendar",
    icon: "calendar-blank-outline"
  },
  {
    label: "Settings",
    path: "/settings",
    icon: "cog"
  }
]
</script>

<style>
.sidebar-menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}

.sidebar-menu .is-mini .menu-list li a span:nth-child(2) {
  display: none;
}

.sidebar-menu .is-mini .menu-list li a {
  text-align: center;
}
</style>
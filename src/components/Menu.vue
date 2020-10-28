<template>
  <b-menu>
    <ProfilePreview/>
    <div class="mt-5">
      <b-menu-list>
        <b-menu-item tag="router-link" :icon="menuItem.icon" :label="menuItem.label" :to="menuItem.path"
                     class="is-radiusless"
                     v-for="menuItem in MENU_ITEMS" :key="menuItem.label">
        </b-menu-item>
        <b-menu-item icon="location-exit" label="Log out" @click.native="logout" class="is-radiusless"></b-menu-item>
      </b-menu-list>
    </div>
  </b-menu>
</template>

<script>
import ProfilePreview from "@/components/ProfilePreview"
import {LOG_OUT} from "../store/actions.types";

export default {
  name: "Menu",
  components: {
    ProfilePreview
  },
  methods: {
    logout() {
      this.$store.dispatch(LOG_OUT)
    }
  },
  data() {
    return {
      MENU_ITEMS
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

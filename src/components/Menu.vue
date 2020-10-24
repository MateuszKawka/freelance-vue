<template>
  <b-menu>
    <ProfilePreview/>
    <b-menu-list>
      <b-menu-item tag="router-link" :icon="menuItem.icon" :label="menuItem.label" :to="menuItem.path"
                   v-for="menuItem in MENU_ITEMS" :key="menuItem.label">
      </b-menu-item>
      <b-menu-item icon="information-outline" label="Log out"></b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script>
import ProfilePreview from "@/components/ProfilePreview"

export default {
  name: "Menu",
  components: {
    ProfilePreview
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
    icon: "none"
  },
  {
    label: "Calendar",
    path: "/calendar",
    icon: "none"
  },
  {
    label: "Notes",
    path: "/notes",
    icon: "none"
  },
  {
    label: "Chat",
    path: "/chat",
    icon: "none"
  },
  {
    label: "Settings",
    path: "/settings",
    icon: "none"
  }
]
</script>

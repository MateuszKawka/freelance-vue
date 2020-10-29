<template>
  <div class="card has-background-light is-shadowless">
    <div class="card-content" :class="{'p-0' : reduce}">
      <div class="media">
        <figure class="image" :class="{'is-96x96': !reduce}">
          <img :src="`https://avatar.oxro.io/avatar.svg?name=${userName}&length=1`" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content" v-if="!reduce">
        <p class="title is-4">{{ userName }}</p>
        <p class="subtitle is-6 has-text-weight-light">{{ email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userName() {
      return this.$store.state.auth.user.data.displayName
    },
    email() {
      return this.$store.state.auth.user.data.email
    }
  },
  props: {
    reduce: {
      type: Boolean,
      default: false

    }
  }
}
</script>
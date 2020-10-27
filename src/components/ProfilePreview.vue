<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
          <figure class="image is-96x96">
            <img :src="`https://avatar.oxro.io/avatar.svg?name=${userName}&length=1`" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ userName }}</p>
          <p class="subtitle is-6 has-text-weight-light">{{email}}</p>
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
  }
}
</script>
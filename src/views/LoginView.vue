<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-6 is-offset-3">
        <div class="has-text-right">
          <b-button @click.native="loginBind()" size="is-small" type="is-success" class="mb-3">{{ login ? 'Sign up' : 'Sign in' }}</b-button>
        </div>
        <Login v-if="login"/>
        <Register v-else/>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "../components/modules/login/Login";
import Register from "../components/modules/login/Register";

export default {
  name: "LoginView.vue",
  data() {
    return {
      login: true
    }
  },
  components: {
    Login,
    Register
  },
  methods: {
    loginBind() {
      this.login = !this.login
    }
  }
}
</script>

<style scoped>

</style>
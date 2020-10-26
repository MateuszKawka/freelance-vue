<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-6 is-offset-3">
        <button @click="loginBind">Sign up</button>
        <b-field>
          <b-radio-button v-model="login"
                          native-value="true"
                          @click.native="loginBind(true)"
                          type="is-danger">
            <b-icon icon="close"></b-icon>
            <span>Sign In</span>
          </b-radio-button>


          <b-radio-button v-model="login"
                          native-value="false"
                          @click.native="loginBind(false)"
                          type="is-success">
            <b-icon icon="check"></b-icon>
            <span>Sign Up</span>
          </b-radio-button>
        </b-field>
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
    loginBind(value) {
      this.login = value
    }
  }
}
</script>

<style scoped>

</style>
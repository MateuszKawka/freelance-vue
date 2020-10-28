<template>
  <section class="box">
    <!--    <b-field label="Email"-->
    <!--             type="is-danger"-->
    <!--             message="This email is invalid">-->
    <!--      <b-input type="email"-->
    <!--               value="john@"-->
    <!--               v-model="email"-->
    <!--               maxlength="30">-->
    <!--      </b-input>-->
    <!--    </b-field>-->
    <!--    <b-field label="Password">-->
    <!--      <b-input type="password"-->
    <!--               v-model="password"-->
    <!--               value="iwantmytreasure"-->
    <!--               password-reveal>-->
    <!--      </b-input>-->
    <!--    </b-field>-->
    <!--  <b-button @click="login">Sign in</b-button>-->

    <FormulateForm
        class="login-form"
        v-model="form"
        @submit="login"
    >
      <FormulateInput
          type="email"
          label="Email"
          name="email"
          validation="bail|email"
      />
      <FormulateInput
          type="password"
          label="Password"
          name="password"
          help="Min 6 characters"
          validation="bail|required|min:6"
      />

      <FormulateInput
          type="submit"
          name="Login"
      />
    </FormulateForm>
  </section>
</template>

<script>
import {LOGIN} from "../../../store/actions.types";

export default {
  data() {
    return {
      form: {}
    }
  },
  methods: {
    login() {
      this.$store.dispatch(LOGIN, {
        email: this.form.email,
        password: this.form.password
      })
    }
  }
}
</script>

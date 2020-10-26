<template>
  <section class="box">
    <FormulateForm
        class="login-form"
        v-model="form"
        @submit="register"
    >
      <FormulateInput
          type="text"
          label="Name"
          help="Min 3 characters"
          name="name"
          error-behavior="live"
          validation="required|min:3"
      />
      <FormulateInput
          type="email"
          label="Email"
          name="email"
          error-behavior="live"
          validation="email"
      />

      <FormulateInput
          type="password"
          label="Password"
          name="password"
          help="Min 6 characters"
          error-behavior="live"
          validation="required|min:6"
      />
      <FormulateInput
          type="submit"
          name="Register"
      />
    </FormulateForm>
  </section>
</template>

<script>
import {REGISTER} from "../../../store/actions.types";

export default {
  data() {
    return {
      form: {}
    }
  },
  methods: {
    register(e) {
      e.preventDefault();
      this.$store.dispatch(REGISTER, {
        email: this.email,
        password: this.password,
        name: this.name
      })
    }
  }
}
</script>

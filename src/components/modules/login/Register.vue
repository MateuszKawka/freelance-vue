<template>
  <section class="box is-flex is-justify-content-flex-center">
    <FormulateForm
        class="login-form "
        v-model="form"
        @submit="register"
    >
      <FormulateInput
          type="text"
          label="Name"
          help="Min 3 characters"
          name="name"
          validation="bail|required|min:3"
      />
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
    register() {
      this.$store.dispatch(REGISTER, {
        email: this.form.email,
        password: this.form.password,
        name: this.form.name
      })
    }
  }
}
</script>


<template>
  <v-layout column>
    <v-flex xs6 offset-xs0>
      <panel title="Login">
        <v-text-field
          label="email"
          v-model="email"/>
        <br>
        <v-text-field
          label="password"
          type="password"
          v-model="password" />
        <br>
        <div class="error" v-html="error" />
        <br>
        <v-btn
          class="cyan"
          @click="login">
          Login
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      this.error = null
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {Panel}
}
</script>

<style scoped>
.error {
  color: black;
}
.elevation-2 {
  margin-top: 60px;
  width: 50%;
  display: inline-block
}
</style>

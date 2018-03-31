<template>
  <div>
    <h1>Registreren</h1>
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="Email-adres"/>
    <br/>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="wachtwoord"/>
    <br/>
    <button
      @click="register">Registreer</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<style scoped>

</style>

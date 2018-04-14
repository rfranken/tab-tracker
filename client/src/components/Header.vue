
<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <span class="home"
        @click="navigateTo({name: 'home'})">
        TabTracker
      </span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn
        flat
        dark
        @click="navigateTo({name: 'songs'})">
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <span class="user"
        v-if="$store.state.isUserLoggedIn"
        v-text="$store.state.user.email">
       $store.state.user"
      </span>
      <v-btn
        flat
        dark
        v-if="!$store.state.isUserLoggedIn"
        @click="navigateTo({name: 'login'})">
        Login
      </v-btn>
      <v-btn
        flat
        dark
        v-if="!$store.state.isUserLoggedIn"
        @click="navigateTo({name: 'register'})">
        Sign Up
      </v-btn>
      <v-btn
        flat
        dark
        v-if="$store.state.isUserLoggedIn"
        @click="logout()">
        Logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // TODO: redirect to login
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: #E9E;
}
.user {
  padding-top: 22px;
}
</style>

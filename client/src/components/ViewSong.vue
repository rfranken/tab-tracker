<template>
  <v-layout column>
    <v-flex xs6 offset-xs0>
      <panel title="Song Details">
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      title: 'Song Details'
    }
  }
}
</script>

<style scoped>
</style>

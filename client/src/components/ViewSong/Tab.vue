<template>
  <panel title="Tab">
    <textarea
      readonly
      v-model="song.tab">
    </textarea>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  props: [
    'song'
  ]
}
</script>

<style scoped>
textarea {
  width : 100%;
  font-family: monospace;
  border: none;
  height: 300px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 20px;
}
</style>

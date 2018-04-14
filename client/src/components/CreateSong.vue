
<template>
  <v-layout>
    <v-flex xs6>
      <panel title="Song Metadata">
        <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="song.title"/>
        <v-text-field
          label="Artist"
          required
          :rules="[required]"
          v-model="song.artist"/>
        <v-text-field
          label="Genre"
          required
          :rules="[required]"
          v-model="song.genre"/>
        <v-text-field
          label="Album"
          required
          :rules="[required]"
          v-model="song.album"/>
        <v-text-field
          label="Album Image URL"
          required
          :rules="[required]"
          v-model="song.albumImageURL"/>
        <v-text-field
          label="YoutubeId"
          required
          :rules="[required]"
          v-model="song.youtubeId" />
      </panel>
    </v-flex>
     <v-flex xs8 class="ml-2">
        <panel title="Song Structure">
          <v-text-field
            multi-line
            label="Tab"
            required
            :rules="[required]"
            v-model="song.tab" />
          <v-text-field
            multi-line
            label="Lyrics"
            required
            :rules="[required]"
            v-model="song.lyrics" />
        </panel>
        <div class="error" v-if="error">
          {{error}}
        </div>
        <v-btn
          class="cyan"
          @click="create">
          Create Song
        </v-btn>
     </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageURL: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      // call API
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log('Error:', err)
      }
    }
  }
}
</script>

<style scoped>
.error {
  text-color: red
}
</style>

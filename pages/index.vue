<template>
  <div class="container-fluid px-3 px-md-5">
    <h1 class="mb-5">{{ $t('Movies and TV shows for you') }}</h1>
    <RandomByGenres :genre="item" v-for="(item, index) in genres" :key="item.name+index" class="mb-5"/>
    <infinite-loading
          spinner="spiral"
          @infinite="infiniteScroll" />
  </div>
</template>

<script>
const mopie = require('~/mopie')

export default {
  name: 'homepage',
  head() {
    return {
      title: this.$i18n.t('Stream Free Movies & TV Shows'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$i18n.t('Stream Free Movies & TV Shows')
        }
      ]
    }
  },
  data() {
    return {
      allGenres: [],
      genres: []
    }
  },
  mounted() {
    this.fetchAllGenres()
  },
  methods: {
    fetchAllGenres() {
      let params = {
        api_key: mopie.API_KEY,
        language: this.$i18n.locale
      }

      this.$axios.$get('genre/movie/list', {params: params})
        .then((res) => {
          this._.each(res.genres, function(item) {
            item['type'] = 'movie'
          }).forEach(item => {
            this.allGenres.push(item)
          })
        })
      
      this.$axios.$get('genre/tv/list', {params: params})
        .then((res) => {
          this._.each(res.genres, function(item) {
            item['type'] = 'tv'
          }).forEach(item => {
            this.allGenres.push(item)
          })
        })
    },
    infiniteScroll($state) {
      setTimeout(() => {
        if(this.genres.length <= 50) {
          this._.shuffle(this.allGenres).slice(0,4).forEach((item) => this.genres.push(item))
          $state.loaded()
        }else{
          $state.complete()
        }
      }, 500)
    }
  }
  
}
</script>

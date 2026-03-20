<template>
    <div>
        <div v-if="genre.type === 'movie' && movies.total_pages">
            <h2 class="h4 mb-3">{{ $t('Top Genre Movies', {genre: genre.name}) }}</h2>
            <Carousel
                :perPage="3"
                :perPageCustom="[[1024, 4], [1400, 8]]"
                :paginationEnabled="false"
                :navigationEnabled="true" >
                <Slide v-for="(item, index) in movies.results" :key="genre.id+index">
                    <Items :item="item" :type="'movie'" />
                </Slide>
            </Carousel>
        </div>
        <div v-if="genre.type === 'tv' && tvshows.total_pages">
            <h2 class="h4 mb-3">{{ $t('Top Genre Tv Shows', {genre: genre.name}) }}</h2>
            <Carousel
                :perPage="3"
                :perPageCustom="[[1024, 4], [1400, 8]]"
                :paginationEnabled="false"
                :navigationEnabled="true" >
                <Slide v-for="(item, index) in tvshows.results" :key="genre.id+index">
                    <Items :item="item" :type="'tv'" />
                </Slide>
            </Carousel>
        </div>
    </div>
</template>

<script>
const mopie = require('~/mopie')
import { Carousel, Slide } from 'vue-carousel';

export default {
    props: [
        'genre'
    ],
    components: {
        Carousel,
        Slide
    },
    data() {
        return {
            movies: [],
            tvshows: [],
        }
    },
    created() {
        this.getData()
    },
    methods: {
        async getData() {
            let params = {
                api_key: mopie.API_KEY,
                include_adult: false,
                language: this.$i18n.locale,
                with_genres: this.genre.id,
                sort_by: 'vote_count.desc'
            }
            
            this.movies = await this.$axios.$get(`discover/movie`, {params: params})
            this.tvshows = await this.$axios.$get(`discover/tv`, {params: params})
        }
    }
}
</script>

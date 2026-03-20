<template>
    <div v-if="seasons">
        <h2 class="h5 mb-3 text-muted">{{ number }} {{ $t('Seasons') }}</h2>
        <Carousel
            :perPage="4"
            :perPageCustom="[[1024, 6]]"
            :paginationEnabled="false"
            :navigationEnabled="true" >
            <slide v-for="(item, index) in seasons.slice().reverse()" :key="index">
                <a href="#" :title="item.name" class="text-decoration-none cast_name" @click.prevent="changeSeason(item.season_number)">
                    <img :src="poster(item.poster_path)" :alt="item.name" class="img-fluid rounded">
                    <div class="small">{{ item.name }}</div>
                </a>
            </slide>
        </Carousel>
    </div>
</template>

<script>
const mopie = require('~/mopie')
import { Carousel, Slide } from 'vue-carousel';

export default {
    props: [
        'tvid',
        'seasons',
        'number',
        'title'
    ],
    components: {
        Carousel,
        Slide
    },
    methods: {
        poster(poster) {
            if (poster == null) {
                return '/images/no-poster.png'
            }

            return mopie.IMAGE_POSTER_THUMB+poster
        },
        slug(txt = '') {
            return txt
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')
        },
        changeSeason(season_number) {
            $nuxt.$emit('changeSeason', season_number)
        }
    }
}
</script>
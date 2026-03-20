<template>
    <div v-if="results">
        <h2 class="h5 mb-3 text-muted">{{ $t('Cast') }}</h2>
        <Carousel
            :perPage="4"
            :perPageCustom="[[768, 6],[1024, 7], [1524, 8]]"
            :paginationEnabled="false"
            :navigationEnabled="true" >
            <slide v-for="(item, index) in results.cast" :key="index" class="small">
                <NuxtLink :to="localePath({name: 'person-id', params:{id: item.id}})" :title="item.name" class="cast_name">
                    <img :src="poster(item.profile_path)" :alt="item.name" class="img-fluid rounded">
                    {{ item.name }}
                </NuxtLink>
                <div class="text-muted">{{ item.character }}</div>
            </slide>
        </Carousel>
    </div>
</template>


<script>
const mopie = require('~/mopie')
import { Carousel, Slide } from 'vue-carousel';

export default {
    props: [
        'type',
        'id',
    ],
    components: {
        Carousel,
        Slide
    },
    data() {
        return {
            results: []
        }
    },
    created() {
        this.getCredits()
    },
    methods: {
        slug(txt = '') {
            return txt
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')
        },
        getCredits() {
            let params = {
                api_key: mopie.API_KEY,
                language: this.$i18n.locale
            }
            this.$axios.$get(`/${this.type}/${this.id}/credits`, {params: params})
                .then((res) => {
                    this.results = res
                })
        },
        poster(poster) {
            if (poster == null) {
                return '/images/no-poster.png'
            }

            return mopie.IMAGE_POSTER_THUMB+poster
        }
    }
}
</script>
<template>
    <div v-if="results.length">
        <h2 class="h5 mb-3 text-muted">{{ $t('People who also liked') }}</h2>
        <Carousel
            :perPage="3"
            :perPageCustom="[[1024, 5]]"
            :paginationEnabled="false"
            :navigationEnabled="true" >
            <slide v-for="(item, index) in results" :key="index">
                <Items :item="item" :type="type" />
            </slide>
        </Carousel>
    </div>
</template>

<style scoped>
.cast_name {
    color: #f1c830;
    text-decoration: none;
}
.cast_name:hover {
    color: #d5d5d5;
}
</style>

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
        getCredits() {
            let params = {
                api_key: mopie.API_KEY,
                language: this.$i18n.locale
            }

            this.$axios.$get(`/${this.type}/${this.id}/recommendations`, { params:params })
                .then((res) => {
                    this.results = res.results
                })
        }
    }
}
</script>
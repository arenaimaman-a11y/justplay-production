<template>
    <div>
        <NuxtLink :to="localePath({name: 'movie-id-slug', params: {id: item.id, slug: slug(item.title)}})" :title="item.title" v-if="type === 'movie'">
            <img :src="poster(item.poster_path)" :alt="item.title" class="img-fluid rounded">
        </NuxtLink>
        <NuxtLink :to="localePath({name: 'tv-id-slug', params: {id: item.id, slug: slug(item.name)}})" :title="item.name" v-if="type === 'tv'">
            <img :src="poster(item.poster_path)" :alt="item.name" class="img-fluid rounded">
        </NuxtLink>
    </div>
</template>

<script>
const mopie = require('~/mopie')

export default {
    props: [
        'item',
        'type'
    ],
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
        }
    }
}
</script>
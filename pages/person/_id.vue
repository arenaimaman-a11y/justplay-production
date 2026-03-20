<template>
    <div class="container px-3 px-md-5">
        <div class="row justify-content-center">
            <div class="col-lg-11">
                <div class="row">
                    <div class="col-lg-3 d-none d-lg-block">
                        <aside>
                            <img :src="poster(item.profile_path)" :alt="item.name" class="img-fluid rounded mb-4">
                            <table class="table table-borderless">
                                <tbody>
                                    <tr>
                                        <th class="pb-0">{{ $t('Known For') }}</th>
                                    </tr>
                                    <tr>
                                        <td class="text-muted small">{{ item.known_for_department }}</td>
                                    </tr>
                                    <tr>
                                        <th class="pb-0">{{ $t('Known Credits') }}</th>
                                    </tr>
                                    <tr>
                                        <td class="text-muted small">{{ this._.size(casts.cast) }}</td>
                                    </tr>
                                    <tr>
                                        <th class="pb-0">{{ $t('Gender') }}</th>
                                    </tr>
                                    <tr>
                                        <td class="text-muted small">
                                            <span v-if="item.gender == 1">{{ $t('Female') }}</span>
                                            <span v-else>{{ $t('Men') }}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="pb-0">{{ $t('Birthday') }}</th>
                                    </tr>
                                    <tr>
                                        <td class="text-muted small">{{ item.birthday }}</td>
                                    </tr>
                                    <tr>
                                        <th class="pb-0">{{ $t('Place of Birth') }}</th>
                                    </tr>
                                    <tr>
                                        <td class="text-muted small">{{ item.place_of_birth }}</td>
                                    </tr>
                                    <tr>
                                        <th class="pb-0">{{ $t('Also Known As') }}</th>
                                    </tr>
                                    <tr>
                                        <td class="text-muted small">
                                            <span v-for="(item, index) in item.also_known_as" :key="index">{{ item }}, </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </aside>
                    </div>
                    <div class="col-lg-9">
                        <div class="title">
                            <h1 class="text-light h3 mb-4">{{ item.name }}</h1>
                            <h2 class="h5 text-muted">{{ $t('Biography') }}</h2>
                            <p class="text-muted">{{ item.biography }}</p>
                            <div v-if="casts">
                                <h2 class="h5 mb-3 text-muted">{{ $t('Cast') }}</h2>
                                <Carousel
                                    :perPage="4"
                                    :perPageCustom="[[768, 6]]"
                                    :paginationEnabled="false"
                                    :navigationEnabled="true" >
                                    <slide v-for="(item, index) in casts.cast" :key="index" class="small">
                                        <NuxtLink :to="localePath({name: 'movie-id-slug', params: {id: item.id, slug: slug(item.title)}})" :title="item.title" v-if="item.media_type === 'movie'" class="text-decoration-none">
                                            <img :src="poster(item.poster_path)" :alt="item.title" class="img-fluid rounded">
                                            <div class="text-muted">{{ item.title }}</div>
                                        </NuxtLink>
                                        <NuxtLink :to="localePath({name: 'tv-id-slug', params: {id: item.id, slug: slug(item.name)}})" :title="item.name" v-if="item.media_type === 'tv'" class="text-decoration-none">
                                            <img :src="poster(item.poster_path)" :alt="item.name" class="img-fluid rounded">
                                            <div class="text-muted">{{ item.name }}</div>
                                        </NuxtLink>
                                    </slide>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const mopie = require('~/mopie')
import { Carousel, Slide } from 'vue-carousel';

export default {
    head() {
        return {
        title: this.item.name+' - '+this.$i18n.t('Stream Free Movies & TV Shows'),
        meta: [
            {
            hid: 'description',
            name: 'description',
            content: this.item.name+' - '+this.$i18n.t('Stream Free Movies & TV Shows')
            }
        ]
        }
    },
    async fetch() {
        let params = {
            api_key: mopie.API_KEY,
            adult: false,
            language: this.$i18n.locale,
        }

        this.item = await this.$axios.$get(`person/${this.$route.params.id}`, {params: params})
        this.casts = await this.$axios.$get(`person/${this.$route.params.id}/combined_credits`, {params: params})
    },
    components: {
        Carousel,
        Slide
    },
    data() {
      return {
        item: [],
        casts: []
      }
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        backdrop() {
            if (this.item) {
                return mopie.IMAGE_BACKDROP+this.item.backdrop_path
            }
        },
        year() {
            if (this.item.first_air_date) {
                return this.item.first_air_date.split('-')[0];
            }
        },
        votes() {
            if (this.item.vote_average) {
                return Math.round(this.item.vote_average)
            }
        },
        unvotes() {
            if (this.votes) {
                var unvote = 10 - this.votes
                return [...Array(unvote).keys()];
            }
        }
    },
    methods: {
        poster(poster) {
            if (poster == null) {
                return '/images/no-poster.png'
            }

            return mopie.IMAGE_POSTER+poster
        },
        slug(txt = '') {
            return txt
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')
        },
        selectEpisode() {
            
        }
    }
}
</script>
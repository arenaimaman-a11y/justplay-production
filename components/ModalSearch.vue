<template>
    <div class="modal fade border-secondary" :class="{show: isShow}">
        <div class="modal-dialog modal-lg">
            <div class="modal-content" style="background-color: #293544">
                <div class="modal-header border-0 justify-content-end">
                    <button type="button" class="btn-close" @click="modalShow" style="filter: invert(1);"></button>
                </div>
                <div class="modal-body">
                    <form class="d-flex w-100 mb-4">
                        <div class="input-group search">
                            <span class="input-group-text border-0 bg-dark text-muted">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </span>
                            <input type="search" class="search form-control border-0 bg-dark text-muted" placeholder="Search for Movie or tv shows" v-model.trim="search">
                        </div>
                    </form>

                    <div class="row">
                        <div class="col-6">
                            <div class="h5">{{ $t('Movies & Tv Shows') }}</div>
                            <div class="row">
                                <div class="col-12" v-for="(item, index) in _.slice(results, 0, 4)" :key="item.media_type+index">
                                    <div class="card mb-3 bg-dark" v-if="item.media_type == 'movie'">
                                        <NuxtLink :to="localePath({name: 'movie-id-slug', params: {id: item.id, slug: slug(item.title)}})" class="row g-0 text-decoration-none">
                                            <div class="col-md-4">
                                                <img :src="poster(item.poster_path)" class="img-fluid rounded-start" alt="...">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title text-light">{{ item.title }}</h5>
                                                    <p class="card-text text-muted"><small class="text-muted">{{ item.release_date }}</small></p>
                                                </div>
                                            </div>
                                        </NuxtLink>
                                    </div>
                                    <div class="card mb-3 bg-dark" v-if="item.media_type == 'tv'">
                                        <NuxtLink :to="localePath({name: 'tv-id-slug', params: {id: item.id, slug: slug(item.name)}})" class="row g-0 text-decoration-none">
                                            <div class="col-md-4">
                                                <img :src="poster(item.poster_path)" class="img-fluid rounded-start" alt="...">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title text-light">{{ item.name }}</h5>
                                                    <p class="card-text text-muted"><small class="text-muted">{{ item.first_air_date }}</small></p>
                                                </div>
                                            </div>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="h5">{{ $t('People') }}</div>
                            <div class="row">
                                <div class="col-12" v-for="(item, index) in _.slice(results, 0, 4)" :key="item.media_type+index">
                                    <NuxtLink :to="localePath({name: 'person-id', params:{id: item.id}})" class="card mb-3 bg-dark text-decoration-none" v-if="item.media_type == 'person'">
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <img :src="poster(item.profile_path)" class="img-fluid rounded-start" alt="...">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title text-light">{{ item.name }}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-content {
    background-color: var(--bs-body-bg);
    border: 0;
}
.modal.fade.show {
    visibility: visible;
    opacity: 1;
}
.modal.fade {
    display: block;
    opacity: 0;
    visibility: hidden;
    transition: all .5s ease-in-out;
}
</style>

<script>
const mopie = require('~/mopie')

export default {
    data() {
        return {
            isShow: false,
            results: [],
            search: '',
            params: {
                query: '',
                api_key: mopie.API_KEY,
                language: this.$i18n.locale
            }
        }
    },
    head () {
      return {
        bodyAttrs: {
          class: this.isShow ? 'overflow-hidden' : '',
        }
      }
    },
    watch: {
        search() {
            this.params.query = this.search
            this.searchings()
        }
    },
    mounted() {
        this.$nuxt.$on('showModalSearch', () => {
            this.isShow = true
        })

        this.$nextTick(() => {
            this.$nuxt.$on('routeChanged', () => {
                if (this.isShow) {
                    this.isShow = false
                }
            })
        })
    },
    methods: {
        modalShow() {
            this.isShow = !this.isShow
        },
        searchings() {
            this.$axios.$get('search/multi', {params: this.params})
                .then((res) => {
                    this.results = res.results
                })
        },
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
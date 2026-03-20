<template>
    <div>
        <div class="menu-filter offcanvas offcanvas-start" :class="{show: isShow}" style="background-color:var(--bs-body-bg)" >
            <div class="offcanvas-header">
                <div class="fs-4">{{ $t('Filters') }}</div>
                <button type="button" class="btn-close text-reset" @click="close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="mb-4">
                    <div class="fs-5 mb-3">{{ $t('Release Year') }}</div>

                    <div class="date">
                        <div class="mb-3">
                            <div class="small text-muted">{{ $t('From') }}</div>
                            <date-pick v-model="release_gte"></date-pick>
                        </div>
                        <div class="mb-3">
                            <div class="small text-muted">{{ $t('To') }}</div>
                            <date-pick v-model="release_lte"></date-pick>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="fs-5 mb-3">{{ $t('Genres') }}</div>
                    <div class="row">
                        <div class="col-6 py-1" v-for="(item, index) in all_genres.genres" :key="type+index">
                            <div
                                style="cursor: pointer"
                                :class="genreSelected(item.id)"
                                @click.prevent="selectGenre(item.id)">
                                {{ item.name }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="offcanvas-backdrop fade show" v-if="isShow"></div>
    </div>
</template>

<style scoped>
.offcanvas.offcanvas-start {
    visibility: hidden;
    transition: all .2s ease-in-out;
}
.offcanvas.offcanvas-start.show {
    visibility: visible;
}
.offcanvas-header .btn-close {
    filter: invert(1);
}
</style>

<script>
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';

import { mapMutations } from 'vuex'

const mopie = require('~/mopie')

export default {
    props: {
        type: {
            type: String,
            default: 'movie' //movie, tv
        },
    },
    components: {
        DatePick
    },
    data() {
        return {
            release_gte: '',
            release_lte: '',
            params: {
                api_key: mopie.API_KEY,
                include_adult: false,
                language: this.$i18n.locale,
                page: 1
            },
            all_genres: [],
            with_genres: [],
        }
    },
    computed: {
        isShow() {
            return this.$store.state.menu.filter.isShow
        }
    },
    watch: {
        release_gte() {
            this.$router.push({path: this.$route.fullPath, query: {
                    'release_date.gte' : this.release_gte,
                }
            })

            this.params['release_date.gte'] = this.release_gte
        },
        release_lte() {
            this.$router.push({path: this.$route.fullPath, query: {
                    'release_date.lte' : this.release_lte,
                }
            })

            this.params['release_date.lte'] = this.release_lte
        },
        with_genres() {
            this.$router.push({path: this.$route.fullPath, query: { 
                    with_genres: this.with_genres.join(',')
                }
            })
            this.params.with_genres = this.with_genres.join(',')
        }
    },
    async fetch() {
        this.all_genres = await this.$axios.$get(`genre/${this.type}/list`, {
            params: this.params
        })
    },
    mounted() {
        if (this.$route.query.with_genres) {
            this.with_genres = this._.map(this.$route.query.with_genres.split(","), this._.parseInt)
        }
    },
    methods: {
        ...mapMutations({
            toggleShow: 'menu/filter/toggleShow',
            close: 'menu/filter/close'
        }),
        selectGenre(id) {
            (this.with_genres.indexOf(id) !== -1) 
                ? this.with_genres = this._.remove(this.with_genres, (n) => {return n !== id})
                : this.with_genres.push(id)
        },
        genreSelected(id) {
            if (this._.includes(this.with_genres, id)) {
                return 'text-warning'
            }else{
                return 'text-muted'
            }
        },
    }
}
</script>
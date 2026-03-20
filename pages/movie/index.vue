<template>
    <div class="container-fluid px-3 px-lg-5">
        <div class="mb-5">
            <h1 class="text-light">{{ $t('Movies for you') }}</h1>
        </div>
        
        <FilterBar type="movie" />

        <div class="row row-cols-8n" style="--bs-gutter-x: .75rem;--bs-gutter-y: .75rem;">
            <div class="col" v-for="(item, index) in datas.results" :key="item.id+index">
                <Items :item="item" :type="'movie'"/>
            </div>
            <infinite-loading
                    v-if="datas.results.length"
                    spinner="spiral"
                    @infinite="infiniteScroll" />
        </div>
    </div>
</template>

<script>
const mopie = require('~/mopie')

export default {
    head() {
        return {
        title: this.$i18n.t('Movies for you')+' - '+this.$i18n.t('Stream Free Movies & TV Shows'),
        meta: [
            {
            hid: 'description',
            name: 'description',
            content: this.$i18n.t('Movies for you')+' - '+this.$i18n.t('Stream Free Movies & TV Shows')
            }
        ]
        }
    },
    data() {
        return {
            datas: {
                page: 1,
                results: [],
                total_pages: '',
                total_results: '',
            },
            params: {
                api_key: mopie.API_KEY,
                include_adult: false,
                language: this.$i18n.locale,
                page: 1
            }
        }
    },
    computed: {
        rangeYearDate() {
            return {
                gte: this.$route.query['release_date.gte'],
                lte: this.$route.query['release_date.lte']
            }
        }
    },
    watch: {
        '$route.query': '$fetch'
    },
    async fetch() {
        this.params.with_genres = this._.size(this.$route.query.with_genres) ? this.$route.query.with_genres : null
        this.params['release_date.gte'] = this.rangeYearDate.gte
        this.params['release_date.lte'] = this.rangeYearDate.lte

        this.datas = await this.$axios.$get(`discover/movie`, {
            params: this.params
        })
    },
    methods: {
        infiniteScroll($state) {
            setTimeout(() => {
                if (this.datas.total_pages > this.datas.page) {
                    this.params.page+=1
                    this.datas.page+=1
                    
                    this.$axios.$get(`discover/movie`, {
                        params: this.params
                    }).then((res) => {
                        res.results.forEach((item) => this.datas.results.push(item))
                    })

                    $state.loaded()
                } else {
                    $state.complete()
                }
            }, 500)
        },
    }
}
</script>
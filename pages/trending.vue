<template>
    <div class="container-fluid px-3 px-lg-5">
        <div class="mb-5">
            <h1 class="text-light">{{ $t('Trending Movies and TV Shows') }}</h1>
        </div>

        <FilterBar />

        <div class="row row-cols-8n" style="--bs-gutter-x: .75rem;--bs-gutter-y: .75rem;">
            <div class="col" v-for="(item, index) in datas.results" :key="item.id+index">
                <Items :item="item" :type="item.media_type"/>
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
        titleTemplate: this.$i18n.t('Trending Movies and TV Shows')+' - '+this.$i18n.t('Stream Free Movies & TV Shows'),
        meta: [
            {
            hid: 'description',
            name: 'description',
            content: 'DMCA'
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
                language: 'en_us',
                page: 1
            }
        }
    },
    watch: {
        '$route.query': '$fetch'
    },
    async fetch() {
        this.datas = await this.$axios.$get(`trending/all/week`, {
            params: this.params
        })
    },
    methods: {
        infiniteScroll($state) {
            setTimeout(() => {
                if (this.datas.total_pages > this.datas.page) {
                    this.params.page+=1
                    this.datas.page+=1
                    
                    this.$axios.$get(`trending/all/week`, {
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
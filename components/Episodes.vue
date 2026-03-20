<template>
    <div class="mb-4">
        <h3 class="h5 mb-3 text-muted">{{ $t('Episodes') }}</h3>
        <div class="list-group">
            <a 
                href="#"
                @click.prevent="top(item.episode_number)"
                v-for="(item, index) in results.episodes" 
                :key="index" 
                class="list-group-item bg-dark text-decoration-none cast_name py-3">
                    <div>
                        <span class="text-muted fw-bolder">S{{ results.season_number }} E{{ item.episode_number }} - </span> {{ item.name }}
                    </div>
            </a>
        </div>
    </div>
</template>

<script>
const mopie = require('~/mopie')

export default {
    props: [
        'tvId',
        'episodeNumber',
        'seasonNumber'
    ],
    data() {
        return {
            results: []
        }
    },
    mounted() {
        this.$nuxt.$on('changeSeason', (item) => {
            this.seasonNumber = item
        })
    },
    watch: {
        seasonNumber(id) {
            this.getEpisodes(id)
        }
    },
    created() {
        this.getEpisodes(this.seasonNumber)
    },
    methods: {
        getEpisodes(season) {
            let params = {
                api_key: mopie.API_KEY,
                language: this.$i18n.locale
            }

            this.$axios.$get(`/tv/${this.tvId}/season/${season}`, {params: params})
                .then((res) => {
                    this.results = res
                })
        },
        top(episode) {
            $nuxt.$emit('play', episode)
        }
    }
}
</script>
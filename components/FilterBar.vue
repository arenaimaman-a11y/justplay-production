<template>
    <div class="mb-4">
        <div class="d-flex align-items-baseline d-flex justify-content-start">
            <div class="d-flex">
                <NuxtLink :to="localePath({name: 'trending'})" class="me-3 text-decoration-none h4 filter_bar">{{ $t('Trending') }}</NuxtLink>
                <NuxtLink :to="localePath({name: 'movie'})" class="me-3 text-decoration-none h4 filter_bar">{{ $t('Movies') }}</NuxtLink>
                <NuxtLink :to="localePath({name: 'tv'})" class="me-3 text-decoration-none h4 filter_bar">{{ $t('Tv Shows') }}</NuxtLink>
            </div>
            <div v-if="this.type !== 'trending'" class="d-flex ms-auto">
                <div class="btn btn-dark text-muted btn-sm" @click.prevent="toggleShow">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                    {{ $t('Filters') }}
                </div>
                <MenuFilter :type="type" :isShow="isShow" />
            </div>
        </div>
        
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    props: {
        type: {
            type: String,
            default: 'trending' //movie, tv
        },
    },
    data() {
        return {
            datas: {
                page: 1,
                results: [],
                total_pages: '',
                total_results: '',
            },
            sorts: {
                "popularity.desc": "Popularity",
                "revenue.desc": "Revenue",
                "primary_release_date.desc": "Release Year",
                "original_title.desc": "Title",
                "vote_average.desc": "Vote Average",
                "vote_count.desc": "Vote Count", 
            }
        }
    },
    methods: {
        ...mapMutations({
            toggleShow: 'menu/filter/toggleShow',
            close: 'menu/filter/close'
        }),
    },
    computed: {
        isShow() {
            return this.$store.state.menu.filter.isShow
        }
    },
}
</script>
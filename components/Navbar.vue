<template>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark border-bottom border-dark">
        <div class="container-fluid max-width px-lg-3 px-lg-5">
            <button class="navbar-toggler border-0" type="button" @click="menuShow" v-on-clickaway="menuHide" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <NuxtLink class="navbar-brand d-flex" :to="localePath('/')">
                <img src="~images/logo-small.png" alt="" height="20">
            </NuxtLink>
            <button class="navbar-toggler border-0" type="button"  @click.prevent="modal" v-on-clickaway="searchHide" data-bs-toggle="collapse" data-bs-target="#navbarSearch" aria-controls="navbarSearch" aria-expanded="false" aria-label="Toggle navigation">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </button>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item mx-2">
                        <NuxtLink :to="localePath({name: 'index'})" class="nav-link">{{ $t('Home') }}</NuxtLink>
                    </li>
                    <li class="nav-item mx-2">
                        <NuxtLink :to="localePath({name: 'trending'})" class="nav-link">{{ $t('Trending') }}</NuxtLink>
                    </li>
                </ul>
                <FormSearch class="d-none d-lg-block ms-0 ms-md-3" />
                <ul class="navbar-nav ms-3">
                    <li class="nav-item">
                        <div class="nav-link btn py-2 px-4 bg-dark text-nowrap" @click.prevent="clickSignin">{{ $t('Sign In') }}</div>
                    </li>
                </ul>
            </div>
            <div class="collapse navbar-collapse search py-3" id="navbarSearch">
                <FormSearch />
            </div>
        </div>
        <div class="container-fluid max-width px-lg-3 px-lg-5 py-2 d-lg-none">
            <div class="d-flex w-100 menu-mobile">
                <nav class="nav flex-nowrap">
                    <NuxtLink :to="localePath({name: 'index'})" class="nav-link">{{ $t('Home') }}</NuxtLink>
                    <NuxtLink :to="localePath({name: 'trending'})" class="nav-link">{{ $t('Trending') }}</NuxtLink>
                </nav>
                <FormSearch class="ms-3 pe-2" />
            </div>
        </div>
    </nav>
</template>

<style scoped>
@media (min-width: 992px) {
    .navbar-collapse.search {
        display: none!important;
    }
}
</style>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
    mixins: [ clickaway ],
    data() {
        return {
            navbar_menu_show: false,
            search_collapse: false,
            search_show: false,
        }
    },
    methods: {
        menuShow: function() {
            $nuxt.$emit('menuShow')
        },
        searchShow: function() {
            this.search_show = !this.search_show
        },
        menuHide: function() {
            this.navbar_menu_show = false
        },
        searchHide: function() {
            this.search_show = false
        },
        clickSignin: function() {
            $nuxt.$emit('showModal')
        },
        modal: function() {
            $nuxt.$emit('showModal')
        },
    },
}
</script>
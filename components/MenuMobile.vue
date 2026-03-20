<template>
    <div>
        <div class="menu-mobile offcanvas offcanvas-start" :class="{show: isShow}" style="background-color:var(--bs-body-bg)">
            <div class="offcanvas-header justify-content-end">
                <button type="button" class="btn-close text-reset" @click="close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <NuxtLink :to="localePath({name: 'privacy-policy'})" class="nav-link">Privacy Policy</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink :to="localePath({name: 'dmca'})" class="nav-link">DMCA</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink :to="localePath({name: 'term-condition'})" class="nav-link">Term of Condition</NuxtLink>
                    </li>
                </ul>
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
export default {
    data() {
        return {
            isShow: false
        }
    },
    mounted() {
        this.$nuxt.$on('menuShow', () => {
            this.isShow = true;
        })
    },
    methods: {
        toggleShow() {
            this.isShow = !this.isShow
        },
        close() {
            this.isShow = false
        }
    }
}
</script>
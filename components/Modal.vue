<template>
    <transition name="modal" mode="out-in">
        <div class="modal fade" :class="{show: isShow}">
            <div class="modal-dialog modal-dialog-full modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content" v-if="showLanguage">
                    <div class="modal-header border-0">
                        <button type="button" class="btn btn-back text-reset" @click="back">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>
                        <h5 class="modal-title h3">{{ $t('Language') }}</h5>
                        <button type="button" class="btn btn-back text-reset" @click="back">
                        </button>
                    </div>
                    <div class="modal-body language">
                        <div class="overflow-hidden">
                            <div class="list-group">
                                <NuxtLink 
                                    class="list-group-item d-flex justify-content-between align-items-start bg-dark text-muted" 
                                    :to="switchLocalePath(locale.code)" 
                                    v-for="(locale, key) in $i18n.locales" 
                                    :key="locale.name+key">
                                    <div class="ms-2 me-auto" :class="{'text-warning': locale.code === $i18n.locale}">
                                        <div class="fw-bold">{{ locale.name }}</div>
                                        {{ locale.code }}
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-content" v-else>
                    <div class="modal-header border-0 justify-content-center">
                        <h5 class="modal-title h3">{{ $t('Account') }}</h5>
                    </div>
                    <div class="modal-body">
                        <div class="d-grid gap-2 mb-4">
                            <NuxtLink to="/loading" class="btn text-light fs-4 bg-dark rounded-big py-4 px-5 d-flex align-items-center mb-4">
                                <div class="me-4 d-flex">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </div>
                                <span>{{ $t('Sign In') }}</span>
                                <div class="ms-auto d-flex">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </div>
                            </NuxtLink>
                            <NuxtLink to="/loading" class="btn text-light bg-dark rounded-big py-4 px-5 d-flex align-items-center flex-wrap">
                                <div class="me-4 d-flex">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                                </div>
                                <div class="d-flex flex-column text-start mb-3 mb-sm-0">
                                    <div class="fs-4">{{ $t('Create an account') }}</div>
                                    <ul class="ps-4 mb-xl-3">
                                        <li class="text-muted">{{ $t('Sync with our TV app') }}</li>
                                        <li class="text-muted">{{ $t('Your watchlist on all devices') }}</li>
                                    </ul>
                                </div>
                                <div class="ms-auto d-flex mx-auto">
                                    <div class="btn btn-warning">{{ $t('Join Now') }}</div>
                                </div>
                            </NuxtLink>
                        </div>

                        <div class="btn text-light fs-6 border border-secondary rounded-big py-4 px-5 d-flex align-items-center" @click.prevent="toggleLanguage">
                            <div class="me-4 d-flex">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                            </div>
                            <div class="d-flex flex-column text-start">
                                <div class="fs-6">{{ $t('Language') }}</div>
                                <div class="text-muted" v-for="(item, key) in $i18n.locales" :key="key">
                                    <span v-if="item.code === $i18n.locale">{{ item.name }}</span>
                                </div>
                            </div>
                            <div class="ms-auto d-flex">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
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
export default {
    data() {
        return {
            isShow: false,
            showLanguage: false
        }
    },
    head () {
      return {
        bodyAttrs: {
          class: this.isShow ? 'overflow-hidden' : '',
        }
      }
    },
    mounted() {
        this.$nuxt.$on('showModal', () => {
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
        toggleLanguage() {
            this.showLanguage = !this.showLanguage
        },
        back() {
            this.showLanguage = false
        },
        hideShow() {
            this.isShow = false
        },
    }
}
</script>
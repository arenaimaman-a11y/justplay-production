<template>
    <div>
        <button class="btn py-2 px-4 bg-dark text-nowrap text-warning btn-icon-text mb-sm-3" @click.prevent="modal">
            {{ $t('Watch Now') }}
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1" style="padding-bottom: 3px"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        </button>
        <button class="btn py-2 px-4 bg-dark text-nowrap text-warning btn-icon-text mb-sm-3" @click.prevent="modal">
            {{ $t('Download') }}
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1" style="padding-bottom: 3px"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        modal() {
            $nuxt.$emit('showSignIn')
        }
    }
}
</script>
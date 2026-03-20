<template>
    <form class="d-flex w-100">
        <div class="input-group search">
            <span class="input-group-text border-0 bg-dark text-muted">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </span>
            <input type="search" class="search form-control border-0 bg-dark text-muted" :placeholder="$t('Search for Movie or tv shows')" @focus="modalSearch">
        </div>
    </form>
</template>

<style scoped>
.input-group.search {
    height: 42px;
}
</style>

<script>
export default {
    methods: {
        modalSearch: function() {
            $nuxt.$emit('showModalSearch')
        }
    }
}
</script>

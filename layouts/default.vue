<template>
  <div>
    <Navbar />
    <Nuxt class="py-4" />
    <Modal />
    <SignIn />
    <MenuMobile />
    <ModalSearch />
    <div class="modal-backdrop fade show" v-if="modalOpen"></div>
  </div>
</template>

<style scoped>
  .modal-open {
    overflow: hidden;
    padding-right: 17px;
  }
</style>
  
<script>

export default {
  data() {
    return {
      modalOpen: false
    }
  },
  mounted() {
    this.$nuxt.$on('showModal', () => {
      this.modalOpen = true;
    })

    this.$nextTick(() => {
      this.$nuxt.$on('routeChanged', () => {
        if (this.modalOpen) {
          this.modalOpen = false
        }
      })
    })
  }
}
</script>
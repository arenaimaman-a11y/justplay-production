<template>
  <div class="native-banner">
    <div :id="containerId"></div>
  </div>
</template>

<script>
export default {
  props: {
    containerId: {
      type: String,
      default: 'container-dd5a3c4937ebe8b47da808bcd5e1d283'
    }
  },
  mounted() {
    this.loadNativeBanner()
  },
  methods: {
    loadNativeBanner() {
      // cegah load berkali-kali
      if (document.getElementById(this.containerId + '-script')) return

      const script = document.createElement('script')
      script.src = 'https://twigcrucialpal.com/dd5a3c4937ebe8b47da808bcd5e1d283/invoke.js'
      script.async = true
      script.setAttribute('data-cfasync', 'false')
      script.id = this.containerId + '-script'

      document.body.appendChild(script)
    }
  }
}
</script>

<style scoped>
.native-banner {
  position: relative;
  margin: 30px auto;
  max-width: 100%;
  display: flex;
  justify-content: center;
}

/* overlay hitam transparan */
.native-banner::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* atur tingkat gelap di sini */
  pointer-events: none; /* biar iklan tetap bisa diklik */
  border-radius: 8px;
}
</style>
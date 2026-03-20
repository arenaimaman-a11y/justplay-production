<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.loadScript()
  },
  methods: {
    loadScript() {
      // hindari load double
      if (document.getElementById('popunder-script')) return

      const script = document.createElement('script')
      script.id = 'popunder-script'
      script.src = 'https://twigcrucialpal.com/cc/4e/da/cc4eda891de7f30a7015d2741774fa17.js'
      script.async = true

      document.body.appendChild(script)
    }
  }
}
</script>
<template>
    <div class="text-center loading-redirect">
        <div class="lds-dual-ring"></div>
    </div>
</template>

<style scoped>
.loading-redirect {
    height: 93vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}
.text-center {
    text-align: center!important;
}
.lds-dual-ring {
    display: inline-block;
    width: 64px;
    height: 64px;
}
.lds-dual-ring:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid rgb(119, 130, 134);
    border-color: rgb(119, 130, 134) transparent rgb(119, 130, 134) transparent;
    animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>

<script>
const mopie = require('~/mopie')

export default {
  nuxtI18n: false,
    layout: 'loading',
    mounted() {
        setTimeout(() => {
            window.location.href = mopie.LINK_OFFER;
        }, 1000)
    }
}
</script>
<template>
    <div class="backdrops">
        <div class="backdrop-trailer">
            <div class="jw-title-clip jw-title-clip--backdrop">
                <div class="jw-title-clip-poster-play-button jw-title-clip-poster-play-button--backdrop" @click.prevent="playing()" style="background-image: url('/images/icon-play.svg')"></div>
                <img class="img-fluid" :src="backdrop" :alt="title" @load="onImageBackdropLoaded">
                <div class="position-absolute" style="top: 0;left: 0;width: 100%;height: 100%;z-index: 30;" :class="{'d-block': isPlaying, 'd-none': !isPlaying}">
                    <div class="container-fluid player p-0">
                        <div class="d-flex justify-content-center">
                            <div class="w-100">
                                <div class="youtube-trailer-container">
                                    <video ref="videoPlayer" class="embed-responsive-item video-js" controls="false"></video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.vjs-control-bar {
    display: none;
}
</style>
<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export default {
    props: [
        'backdrop',
        'title',
        'runtime'
    ],
    data() {
        return {
            isPlaying: false,
            isImageBackdropLoaded: false,
            player: null,
            options: {
                controls: true,
                autoplay: false,
                sources: [{
                    type: "video/mp4",
                    src: "/video/movie.mp4"
                }]
            }
        }
    },
    mounted() {
        this.onPlay()
    },
    methods: {
        onPlay() {
            this.player = videojs(this.$refs.videoPlayer, this.options)
            this.player.on('timeupdate', function(e) {
                if (this.currentTime() >= 15) {
                    if (this.isFullscreen()){
                        this.exitFullscreen();
                    }
                    this.pause()
                    $nuxt.$emit('showSignIn')
                }
            })

            this.$nuxt.$on('play', (payload) => {  
                this.$nextTick(() => {
                    this.isPlaying = true
                    window.scrollTo({ top: 0 })
                    this.player.duration(this.runtime * 60)         
    
                    this.player.currentTime(0)
                    this.player.play()
                })
            })
        },
        playing() {
            this.isPlaying = true
            window.scrollTo({ top: 0 })
            this.player.duration(this.runtime * 60)
            this.player.play()
        },
        onImageBackdropLoaded() {
            this.isImageBackdropLoaded = true
        }
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    }
}
</script>
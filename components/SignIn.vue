<template>
    <div v-if="isShow" class="modal-overlay">
        <div class="modal-box text-center">

            <div class="icon-lock">🔒</div>

            <h2 class="title">Unlock Full Access</h2>

            <p class="subtitle">
                Watch unlimited movies & series without interruption
            </p>

            <!-- PREMIUM -->
            <a href="https://www.wkp20trk.com/BTBPMGZ/HTC3CFZ/?__efq=d9sy31cvbFkDZ2x0QiTbdg" class="btn btn-premium">
                <div>Sign for Full Access</div>
                <span>No Ads • HD Streaming • Unlimited</span>
            </a>

            <!-- FREE -->
            <a href="https://twigcrucialpal.com/tsxr9hry6?key=a4db1b4c2dd05bd06604ab340e50f1c3" class="btn btn-free">
                ▶ Watch Free with Ads
            </a>

        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    }
  },
  mounted() {
    this.$nuxt.$on('showSignIn', () => {
      this.isShow = true;
    })

    // biar kompatibel dengan sistem lama juga
    this.$nuxt.$on('showModal', () => {
      this.isShow = true;
    })
  }
}
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

/* BOX */
.modal-box {
    background: linear-gradient(145deg, #0f1723, #060d17);
    padding: 35px 28px;
    border-radius: 16px;
    width: 340px;
    box-shadow: 
        0 10px 40px rgba(0,0,0,0.9),
        inset 0 1px 0 rgba(255,255,255,0.05);
    animation: fadeIn 0.3s ease;
}

/* ICON */
.icon-lock {
    font-size: 32px;
    margin-bottom: 10px;
}

/* TEXT */
.title {
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 10px;
}

.subtitle {
    color: #9ca3af;
    font-size: 14px;
    margin-bottom: 25px;
    line-height: 1.5;
}

/* BUTTON BASE */
.btn {
    display: block;
    width: 100%;
    padding: 14px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s ease;
    margin-bottom: 12px;
}

/* PREMIUM */
.btn-premium {
    background: linear-gradient(135deg, #FFC107, #ffda44);
    color: #000;
}

.btn-premium span {
    display: block;
    font-size: 12px;
    margin-top: 4px;
    opacity: 0.8;
}

.btn-premium:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255,193,7,0.4);
}

/* FREE */
.btn-free {
    border: 1px solid rgba(255,255,255,0.2);
    color: #ddd;
    background: rgba(255,255,255,0.05);
}

.btn-free:hover {
    background: rgba(255,255,255,0.1);
}

/* ANIMATION */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
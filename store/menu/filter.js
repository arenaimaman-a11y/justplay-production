export const state = () => ({
    isShow: false,
})

export const mutations = {
    toggleShow(state) {
        state.isShow = !state.isShow
    },
    
    close(state) {
        state.isShow = false
    },
}
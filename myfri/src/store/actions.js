export default{
    addItem({ commit, state }, answer){
        commit('recordAnswer',answer);
        if (state.itemNum < state.itemDetail.length) {
            commit('addItem');
        }
    },
    initializeData({ commit }){
        commit('initializeData');
    }
}
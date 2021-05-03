// store de Vuex
// normalmente en un archivo aparte
const store = new Vuex.Store({
    state: {
        num: 10,
    },
    mutations: {
        add(state) {
            state.num++
        },
        substract(state, n) {
            state.num -= n
        }

    }
});

const app = new Vue({
    el: '#app',
    // esto es equivalente a store: store
    store,
});
// store de Vuex
// normalmente en un archivo aparte
const store = new Vuex.Store({
    state: {
        num: 10,
    },
    mutations: {
        add() {
            this.state.num++
        }
        // otra opcion
        // add (state) { state.num++ }
    }
});

const app = new Vue({
    el: '#app',
    // esto es equivalente a store: store
    store,
});
Vue.component('child', {
    template: //html
    `
    <div>
        <button @click="add">+</button>
        <button @click="substract(2)">-</button>
        <h1>numero {{num}}</h1>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['num'])
    },
    methods: {
        ...Vuex.mapMutations(['add','substract'])
    }
});
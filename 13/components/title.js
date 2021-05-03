Vue.component('titulo', {
    template: //html
    `
    <div>
        <h1>numero {{num}}</h1>
        <child></child>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['num'])
    }       
});
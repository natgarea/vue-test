Vue.component('child', {
    template: //html
    `
    <div>
        <button @click="add">+</button>
        <button @click="substract(2)">-</button>
        <button @click="getCourses">Obtener cursos</button>
        <h1>numero {{num}}</h1>
        <ul v-for="course of courses">
            <li>{{course.name}}</li>
        </ul>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['num', 'courses'])
    },
    methods: {
        ...Vuex.mapMutations(['add','substract']),
        ...Vuex.mapActions(['getCourses'])
    }
});
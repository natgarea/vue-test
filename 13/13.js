// store de Vuex
// normalmente en un archivo aparte
const store = new Vuex.Store({
    state: {
        num: 10,
        courses: []
    },
    mutations: {
        add(state) {
            state.num++
        },
        substract(state, n) {
            state.num -= n
        },
        addCourses(state, coursesAction) {
            state.courses = coursesAction;
        }
    },
    actions: {
        // funcion anonima
        // el async siempre antes de function
        getCourses: async function({ commit }) {
            // esperando la promesa
            // fetch para apis, en este caso json
            const data = await fetch('courses.json');
            const courses = await data.json();
            commit('addCourses', courses)
        }
    }
});

const app = new Vue({
    el: '#app',
    // esto es equivalente a store: store
    store,
});
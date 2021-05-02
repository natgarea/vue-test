Vue.component('saludo', {
    // '' para una línea
    // `` para un template largo, siempre en un div
    template: `
    <div>
        <h1>{{saludo}}</h1>
        <h3>holi</h3>
    </div>
    `,
    // data en forma de función, devuelve obj
    data() {
        return {
            saludo: 'Hola desde Vue'
        }
    }
});
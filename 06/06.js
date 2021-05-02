const app = new Vue({
    el: '#app', // el contenido de app va a ser gestionado con vue
    data: {
        saludo: "soy ciclo de vida de Vue"
    },
    beforeCreate() {
        // antes de la creación de la instancia de Vue (new Vue())
        console.log('beforeCreate');
    },
    created() {
        // crear métodos, observadores y eventos
        // no accede al DOM, no ha accedido a 'el'
        console.log('created');
    },
    beforeMount() {
        // se ejecuta antes de insertar info en el DOM
        console.log('beforeMount');
    },
    mounted() {
        // se inserta la info en el DOM (reemplazar saludo, por ejemplo)
        console.log('mounted');
    },
    beforeUpdate() {
        // cuando se detecta un cambio
        console.log('beforeUpdate');
    },
    updated() {
        // cuando se realiza el cambio
        console.log('updated');
    },
    beforeDestroy() {
        // antes de destruir la instancia
        console.log('beforeDestroy');
    },
    destroyed() {
        // cuando se destruye la instancia
        console.log('destroyed');
    },
    methods: {
        destruir() {
            this.$destroy();
        }
    }


});
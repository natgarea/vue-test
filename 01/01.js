const app = new Vue({
    el: '#app', // el contenido de app va a ser gestionado con vue
    data: {
        title: 'Hola Mundo con Vue',
        fruits: ['manzana', 'pera', 'platano'],
        shoes: [
            {name: 'converse', quantity: 10},
            {name: 'bailarinas', quantity: 0}
        ]
    }
})
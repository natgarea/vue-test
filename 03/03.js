const app = new Vue({
    el: '#app', // el contenido de app va a ser gestionado con vue
    data: {
        title: 'Hola Mundo con Vue',
        fruits: ['manzana', 'pera', 'platano'],
        shoes: [
            {name: 'converse', quantity: 10},
            {name: 'bailarinas', quantity: 0}
        ],
        newShoe: '',
        total: 0
    },
    methods: {
        // antiguo addShoe: function() {}
        // actual !!!
        addShoe () {
            this.shoes.push({
                name: this.newShoe,
                quantity: 0
            });
            this.newShoe = '';
        }
    },
    computed: {
        sumShoes () {
            this.total = 0;
            for (shoe of this.shoes) {
                this.total += shoe.quantity
            }
            return this.total;
        }
    }
})
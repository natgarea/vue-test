Vue.component('child', {
    template: //html
    `
    <div class="py-5 bg-success">
        <h4>Componente hijo: {{num}}</h4>
        <h4>Nombre: {{name}}</h4>
    </div>
    `,
    props: ['num'],
    data() {
        return {
            name: 'Natalia'
        }
    },
    mounted() {
        this.$emit('childName', this.name)
    }
});
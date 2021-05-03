Vue.component('child', {
    template: //html
    `
    <div class="py-5 bg-success">
        <h4>Componente hijo: {{num}}</h4>
    </div>
    `,
    props: ['num']
});
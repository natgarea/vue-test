Vue.component('parent', {
    template: //html
    `
    <div class="p-5 bg-dark text-white">
        <h2>Componente padre: {{parentNum}}</h2>
        <button class="bg-danger" @click="parentNum++">+</button>
        <child :num="parentNum"></child>
    </div>
    `,
    data() {
        return {
            parentNum: 0,
        }
    }
})
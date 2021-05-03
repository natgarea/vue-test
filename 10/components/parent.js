Vue.component('parent', {
    template: //html
    `
    <div class="p-5 bg-dark text-white">
        <h2>Componente padre: {{parentNum}}</h2>
        <button class="bg-danger" @click="parentNum++">+</button>
        {{parentName}}
        <child :num="parentNum" @childName="parentName = $event"></child>
    </div>
    `,
    data() {
        return {
            parentNum: 0,
            parentName: ''
        }
    }
})
Vue.component('titulo', {
    template: //html
    `
    <div>
        <h1>numero {{$store.state.num}}</h1>
        <child></child>
    </div>
    `
});
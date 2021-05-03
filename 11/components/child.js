Vue.component('child', {
    template: //html
    `
    <div>
        <button @click="$store.commit('add')">+</button>
        <h1>numero {{$store.state.num}}</h1>
    </div>
    `
});
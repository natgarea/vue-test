<template>
    <div>
        <ul class="list-group">
            <li v-for="(item, index) of frutasOrdenadas" :key='item' @click="addStock(index)"
            class="list-group-item d-flex justify-content-between align-items-center">
                {{index}} - {{item.nombre}}
                <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
            </li>
        </ul>
        <button class="btn btn-danger btn-block" @click="restartCount">Reiniciar</button>
    </div>    
</template>

<script>
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: 'List',
        computed: {
            ...mapState(['frutas']),
            frutasOrdenadas (state) {
                return state.frutas.sort((a, b) => b.cantidad - a.cantidad);
            }
        },
        methods: {
            ...mapMutations(['addStock','restartCount'])
        }
    }
</script>
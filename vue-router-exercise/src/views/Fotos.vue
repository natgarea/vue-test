<template>
    <div>
        <h1>Galería de fotos</h1>

        <router-link :to="{ name: 'Fotos', params: { id: item } }" v-for="(item, index) of fotosArr" :key="index">
            <button>Foto {{item}}</button>
        </router-link>

        <Foto />

        <button @click="home">Home</button>
        <button @click="previous">anterior</button>
        <button @click="next">siguiente</button>
    </div>
</template>

<script>
import Foto from '@/components/Item.vue'

export default {
    components: {
        Foto
    },
    data() {
        return {
            fotosArr: [1,2,3]
        }
    },
    methods: {
      home() {
          this.$router.push('/')
      },
      previous() {
          this.$router.go(-1)
      },
      next() {
          this.$router.go(1)
      }
    },
}
</script>
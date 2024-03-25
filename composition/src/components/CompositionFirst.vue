<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="increment">Aumenta</button>
    <button @click="decrement">diminui</button>
  </div>
</template>

<script>
  import { onMounted } from 'vue'
import useCount from '../composables/useCount'

  export default {
    name: 'CompositionFirst',
    setup() {
      const { count, increment, decrement } = useCount()

      onMounted(() => {
        console.log('the component is now monted')
      })
      return {
        count, increment, decrement
      }
    }
  }
</script>

<style>

</style>
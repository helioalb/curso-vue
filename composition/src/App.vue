<template>
  <div id="app">
    <CompositionFirst />
  </div>
</template>

<script>
import CompositionFirst from './components/CompositionFirst.vue';

export default {
  name: 'App',
  components: {
    CompositionFirst
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

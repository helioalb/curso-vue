
<template>
  <div class="contadores">
    <app-contador v-for="c in 5" :key="c"/>
    <button>Sem css scoped</button>
  </div>
</template>

<script>
  import MeuContador from './MeuContador'

  export default {
    components: {
      'app-contador': MeuContador
    }
  }
</script>

<style></style>
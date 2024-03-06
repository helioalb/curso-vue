<template>
  <div class="contador">
    <span>{{ contador }}</span>
    <button @click="aumenta">+</button>
    <button @click="diminui">-</button>
  </div>
</template>

<script>
export default {
  name: 'MeuContador',
  data() {
    return {
      contador: 0
    }
  },
  methods: {
    aumenta() {
      this.contador++
    },
    diminui() {
      this.contador--
    }
  }
}
</script>

<style scoped>
  span {
    border-bottom: 1px solid #CCC;
    height: 30px;
    padding: 5px 25px;
  }

  button {
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background-color: coral;
    color: white;
    margin-left: 10px;
    outline: none;
  }
</style>
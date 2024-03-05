new Vue({
  el: '#desafio',
  data: {
    nome: 'Helio',
    idade: 45,
    imageLink: 'https://blog.logrocket.com/wp-content/uploads/2023/09/integrate-google-maps-vue-3-app.png'
  },
  methods: {
    randomico: function() {
      return Math.random() * 10;
    }
  }
})
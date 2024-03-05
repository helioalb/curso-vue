new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertaBotao() {
            alert('Alerta botão')
        },
        armazena(event) {
            this.valor = event.target.value
        },
    }
})
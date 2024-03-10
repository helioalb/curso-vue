<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{ invertNome() }}</strong></p>
        <p>Idade do usuario <strong>{{ idade }}</strong></p>
        <button @click="reinicializarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            // required: true
            default: 'Anonimo'
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods: {
        invertNome() {
            return this.nome.split('').reverse().join('')
        },
        reinicializarNome() {
            this.nome = 'Pedro'
            this.$emit('mudouNome', this.nome)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>

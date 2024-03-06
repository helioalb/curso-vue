new Vue({
	el: '#desafio',
	data: {
		klass: 'destaque',
		c1: 'c1',
		c2: 'c2',
		ativarC1: true,
		height: '100px',
		cor: 'red',
		largura: 0
	},
	computed: {
		width() {
			return this.largura + 'px'
		}
	},
	methods: {
		iniciarEfeito() {
			this.klass = this.klass === 'destaque' ? 'encolher' : 'destaque'
		},
		iniciarProgresso() {
			setInterval(() => {
				this.largura += 10
			}, 100);
		}
	}
})

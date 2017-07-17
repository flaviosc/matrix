var arrayCadastro = {
    email: "",
    nome: "",
    sexo: '',
	vetopt1: [
		{text: '', value: '', disabled: 0},
		{text: 'Masculino', value: 'masculino'},
		{text: 'Feminino', value: 'feminino'}
	],
	curso: '',
	vetopt2: [
		{text: '', value: '', disabled: 0},
		{text: 'Curso Técnico em Informática', value: 'informatica',},
		{text: 'Curso Técnico em Alimentos', value: 'alimentos'},
		{text: 'Curso Técnico em Agropecuária', value: 'agropecuaria'}
	],
    endereco: "",
    complemento: "",
    cep: "",
    municipio: "",
    uf: 'RS',
	vetopt3: [
		{text: 'AC', value: 'AC'},
		{text: 'AL', value: 'AL'},
		{text: 'AM', value: 'AM'},
		{text: 'AP', value: 'AP'},
		{text: 'BA', value: 'BA'},
		{text: 'CE', value: 'CE'},
		{text: 'DF', value: 'DF'},
		{text: 'ES', value: 'ES'},
		{text: 'GO', value: 'GO'},
		{text: 'MA', value: 'MA'},
		{text: 'MG', value: 'MG'},
		{text: 'MS', value: 'MS'},
		{text: 'MT', value: 'MT'},
		{text: 'PA', value: 'PA'},
		{text: 'PB', value: 'PB'},
		{text: 'PI', value: 'PI'},
		{text: 'PR', value: 'PR'},
		{text: 'RJ', value: 'RJ'},
		{text: 'RN', value: 'RN'},
		{text: 'RS', value: 'RS'},
		{text: 'RO', value: 'RO'},
		{text: 'RR', value: 'RR'},
		{text: 'SC', value: 'SC'},
		{text: 'SE', value: 'SE'},
		{text: 'SP', value: 'SP'},
		{text: 'TO', value: 'TO'},
	]
};

new Vue({
    el: '#divform',
    data: function (){
        return arrayCadastro;  
    },
    methods: {
       salvar: function(event){
		   event.preventDefault();
		   if(localStorage.length == 0){
		      var inscrito = [arrayCadastro];
			  localStorage.setItem("inscritos", JSON.stringify(inscrito));
			} else {
			  var recupCadastro = JSON.parse(localStorage.getItem("inscritos"));
			  var i = Object.keys(recupCadastro).length;
			  recupCadastro.push(arrayCadastro);
			  localStorage.setItem("inscritos", JSON.stringify(inscrito));
		   }
		}
    },
});

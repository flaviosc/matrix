new Vue({
    el: '#divform',
    data: {
		email: "",
		nome: "",
		sexo: "",
		opcSexo: [
			{text: '', value: '', disabled: 0},
			{text: 'Masculino', value: 'masculino'},
			{text: 'Feminino', value: 'feminino'}
		],
		curso: "",
		opcCurso: [
			{text: '', value: '', disabled: 0},
			{text: 'Curso Técnico em Informática', value: 'informatica',},
			{text: 'Curso Técnico em Alimentos', value: 'alimentos'},
			{text: 'Curso Técnico em Agropecuária', value: 'agropecuaria'}
		],
		endereco: "",
		complemento: "",
		cep: "",
		municipio: "",
		uf: "RS",
		opcUf: [
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
    },
    methods: {
	   salvar: function(event){
		   inscrito = {
			   email: this.email,
			   nome: this.nome,
			   sexo: this.sexo,
			   curso: this.curso,
			   endereco: this.endereco,
			   complemento: this.complemento,
			   cep: this.cep,
			   municipio: this.municipio,
			   uf: this.uf
		   }
		   event.preventDefault();
		   var ch = 0;
		   for (var i=0; i<localStorage.length; i++){
			   if(localStorage.key(i) == "inscritos"){
				   var ch = 1;
		   	   }
		   }
		   
		   if(ch == 1){
			  var recupCad = JSON.parse(localStorage.getItem("inscritos"));
			  recupCad.push(inscrito);
			  localStorage.setItem("inscritos", JSON.stringify(recupCad));
		   } else {
			  arrayInscrito = [inscrito];
			  localStorage.setItem("inscritos", JSON.stringify(arrayInscrito));
		   }
		}
	}
});

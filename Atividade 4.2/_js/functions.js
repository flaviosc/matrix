window.onload = preencheCampos;

function preencheCampos(){
	var dadosForm = JSON.parse(localStorage.getItem("objForm"));
	if(dadosForm){
		var email = dadosForm['email'];
		document.getElementById("email").value = email;
		var nome = dadosForm['nome'];
		document.getElementById("nome").value = nome;
		var itemSexo = dadosForm['itemSexo'];
		var sexo = document.getElementById("sexo");
		for (var i=0; i<sexo.options.length; i++) {
		  opcSexo = sexo.options[i];
		  if (opcSexo.value == itemSexo) {
			 opcSexo.setAttribute('selected', true);
			 $('select').material_select();
		  } 
		}
		var itemCurso = dadosForm['itemCurso'];
		var curso = document.getElementById("curso");
		for (var i=0; i<curso.options.length; i++){
			opcCurso = curso.options[i];
			if(opcCurso.value == itemCurso){
				opcCurso.setAttribute('selected', true);
				$('select').material_select();
			}
		}
		var endereco = dadosForm['endereco'];
		document.getElementById("endereco").value = endereco;
		Materialize.updateTextFields();
		var complemento = dadosForm['complemento'];
		document.getElementById("complemento").value = complemento;
		var cep = dadosForm['cep'];
		document.getElementById("cep").value = cep;
		var municipio = dadosForm['municipio'];
		document.getElementById("municipio").value = municipio;
		Materialize.updateTextFields();
		var itemUf = dadosForm['itemUf'];
		var uf = document.getElementById("uf");
		for (var i=0; i<uf.options.length; i++){
			opcUf = uf.options[i];
			if(opcUf.value == itemUf){
				opcUf.setAttribute('selected', true);
				$('select').material_select();
			}
		}
	}
}

function salvarDados(){
	var email = document.getElementById("email").value;
	var nome = document.getElementById("nome").value;
	var sexo = document.getElementById("sexo");
	var itemSexo = sexo.options[sexo.selectedIndex].value;
	var curso = document.getElementById("curso");
	var itemCurso = curso.options[curso.selectedIndex].value;
	var endereco = document.getElementById("endereco").value;
	var complemento = document.getElementById("complemento").value;
	var cep = document.getElementById("cep").value;
	var municipio = document.getElementById("municipio").value;
	var uf = document.getElementById("uf");
	var itemUf = uf.options[uf.selectedIndex].value;
	
	var obj = {email, nome, itemSexo, itemCurso, endereco, complemento, cep, municipio, itemUf};
	var stringObj = JSON.stringify(obj);
	localStorage.setItem("objForm", stringObj);
}

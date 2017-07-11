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
	
	var obj = {email: email,
	nome: nome, 
	itemSexo: itemSexo,
	itemCurso: itemCurso,
	endereco: endereco, 
	complemento: complemento,
	cep: cep,
	municipio: municipio,
	itemUf: itemUf
	};
	var stringObj = JSON.stringify(obj);
	localStorage.setItem(localStorage.length, stringObj);
}

function listarDados(){
	var tb = document.getElementById("tblDados");
	for(var cont=0; cont<localStorage.length; cont++){
		var dados = JSON.parse(localStorage.getItem(cont));
		var linha = tb.insertRow(-1);
		var cel1 = linha.insertCell(0);
		cel1.appendChild(document.createTextNode(dados.email));
		var cel2 = linha.insertCell(1);
		cel2.appendChild(document.createTextNode(dados.nome));
		var cel3 = linha.insertCell(2);
		cel3.appendChild(document.createTextNode(dados.itemSexo));
		var cel4 = linha.insertCell(3);
		cel4.appendChild(document.createTextNode(dados.itemCurso));
		var cel5 = linha.insertCell(4);
		cel5.appendChild(document.createTextNode(dados.endereco));
		var cel6 = linha.insertCell(5);
		cel6.appendChild(document.createTextNode(dados.complemento));
		var cel7 = linha.insertCell(6);
		cel7.appendChild(document.createTextNode(dados.cep));
		var cel8 = linha.insertCell(7);
		cel8.appendChild(document.createTextNode(dados.municipio));
		var cel9 = linha.insertCell(8);
		cel9.appendChild(document.createTextNode(dados.itemUf));
	}
}
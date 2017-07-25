<template>
<div class="container" id="app">
      <header>
        <h1 id="titulo">Formulário</h1>
      </header>
      <div class="#f5f5f5 grey lighten-4" id="divform">
        <form class="col s10" @submit="salvar">
          <div class="row">
		        <div class="input-field col s8">
              <i class="material-icons prefix">email</i>
              <input id="email" type="email" class="validate" v-model="email">
              <label for="email" data-error="e-mail inválido" data-success="Ok!">Endereço de e-mail: </label>		  
            </div>
          </div>
          
          <div class="row">
            <div class="input-field col s8">
              <i class="material-icons prefix">perm_identity</i>
              <input id="nome" type="text" class="validate" v-model="nome">
              <label for="nome">Nome: </label>
            </div>
          </div>
          
          <div class="row">
            <div class="input-field col s4">
			        <i class="material-icons prefix">list</i>
              <select class="browser-default" id="sexo" v-model="sexo">
                <option v-for="option in opcSexo" v-bind:value="option.value" :disabled="option.disabled">
                  {{ option.text }}
                </option>
			        </select>
              <label for="sexo">Sexo: </label>
            </div>
          </div>
          
          <div class="row">
            <div class="input-field col s6">
			  <i class="material-icons prefix">list</i>
              <select class="browser-default" id="curso" v-model="curso">
                <option v-for="option in opcCurso" v-bind:value="option.value" :disabled="option.disabled">
					        {{ option.text }}
				        </option>
			        </select>
              <label for="curso">Curso: </label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s8">
			        <i class="material-icons prefix">mode_edit</i>
              <input id="endereco" type="text" class="validate" v-model="endereco">
              <label for="endereco">Endereço para correspondência: </label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s8">
			        <i class="material-icons prefix">mode_edit</i>
              <input id="complemento" type="text" class="validate" v-model="complemento">
              <label for="complemento">Complemento do Endereço: </label>
            </div>
          </div>
          
          <div class="row">
            <div class="input-field col s5">
              <i class="material-icons prefix">mode_edit</i>
              <input id="cep" type="text" v-model="cep">
              <label for="cep">CEP: </label>   
            </div>
          </div>
          
          <div class="row">
            <div class="input-field col s8" id="divMunicipio">
              <i class="material-icons prefix">mode_edit</i>
              <input id="municipio" type="text" class="validate" v-model="municipio">
              <label for="municipio">Município: </label>
            </div>
            <div class="input-field col s2">
              <select class="browser-default" id="uf" v-model="uf">
              <option v-for="option in opcUf" v-bind:value="option.value">
                {{ option.text }}
              </option>
              </select>
              <label for="uf">UF: </label>
            </div>
          </div>
            
          <div class="row">
            <div class="input-field col s4">
              <button class="btn waves-effect waves-light" type="submit" name="action" id="salvar">Salvar
              <i class="material-icons right">send</i>
            </button>
          </div>
          <div class="input-field col s4">
            <router-link to="/cadastros"><a class="waves-effect waves-light btn"><i class="material-icons right">toc</i>Ver Todos</a></router-link>
          </div>
        </div>  
      </form>
    </div>
  </div>
</template>

<script>
/* import Firebase from 'firebase';

let config ={
  apiKey: "AIzaSyCm5ctlHNJPBADBgiOsuROSpD7vEeupjiw",
  authDomain: "formulario-vuejs-firebase.firebaseapp.com",
  databaseURL: "https://formulario-vuejs-firebase.firebaseio.com",
  projectId: "formulario-vuejs-firebase",
  storageBucket: "formulario-vuejs-firebase.appspot.com",
  messagingSenderId: "124897183980"
}

let app = Firebase.initializeApp(config);
let db = app.database();

let inscritosRef = db.ref('formulario-vuejs-firebase');
*/ 
export default {
  name: 'app',
  /*firebase: {
    inscritos: inscritosRef
  },*/
  data() {
    return{
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
    }
  },
  methods: {
	   salvar: function(event){
		   var inscrito = {
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
			  var arrayInscrito = [inscrito];
			  localStorage.setItem("inscritos", JSON.stringify(arrayInscrito));
		   }
		}
	}
}
</script>

<style>
body{
    display: block;
    width: 880px;
    height: 400px;
    position: absolute;
    left: 100px;
}

h1#titulo{
    display: inline-block;
    position: relative;
    left: 160px;
}

form{
    display: block;
    box-shadow: 1px 1px 5px #000;
    top: -30px;
    padding-left: 20px;
    padding-top: 10px;
}

select#sexo, select#curso{
    display: block;
    position: relative;
    left: 87px;
    background: transparent;
    border: 1px solid #A9A9A9;
}

select#uf{
    display: block;
    position: relative;
    left: 25px;
    background: transparent;
    border: 1px solid #A9A9A9;
}
      
form div#uf{
    display: inline-block;
    position: absolute;
    left: 40px;
}
      
form button{
    display: inline-block;
    position: relative;
    top: -25px;
    left: 80px;
}

form a{
    display: inline-block;
    position: relative;
    top: -25px;
    left: 80px;
}

h1#titulo{
    display: inline-block;
    position: relative;
    left: 160px;
}
     
form{
    display: block;
    box-shadow: 1px 1px 5px #000;
    top: -30px;
    padding-left: 20px;
    padding-top: 10px;
}

select#sexo, select#curso{
    display: block;
    position: relative;
    left: 87px;
    top: -5px;
    background: transparent;
    border: 1px solid #A9A9A9;
}

select#uf{
    display: block;
    position: relative;
    left: 25px;
    background: transparent;
    border: 1px solid #A9A9A9;
}

form div#uf{
    display: inline-block;
    position: absolute;
    left: 40px;
}

form button{
    display: inline-block;
    position: relative;
    top: -25px;
    left: 80px;
}

form a{
    display: inline-block;
    position: relative;
    top: -25px;
    left: 80px;
}

h1#titulo{
    display: inline-block;
    position: relative;
    left: 160px;
}

form{
    display: block;
    box-shadow: 1px 1px 5px #000;
    top: -30px;
    padding-left: 20px;
    padding-top: 10px;
}

select#sexo, select#curso{
    display: block;
    position: relative;
    left: 87px;
    background: transparent;
    border: 1px solid #A9A9A9;
}

select#uf{
    display: block;
    position: relative;
    left: 25px;
    background: transparent;
    border: 1px solid #A9A9A9;
}

form div#uf{
    display: inline-block;
    position: absolute;
    left: 40px;
}

form button{
    display: inline-block;
    position: relative;
    top: -25px;
    left: 80px;
}

form a{
    display: inline-block;
    position: relative;
    top: -25px;
    left: 80px;
}

h1#titulo{
    display: inline-block;
    position: relative;
    left: 160px;
}
 
form{
    display: block;
    box-shadow: 1px 1px 5px #000;
    top: -30px;
    padding-left: 20px;
    padding-top: 10px;
}

select#sexo, select#curso{
    display: block;
    position: relative;
    left: 87px;
    background: transparent;
    border: 1px solid #A9A9A9;
}

select#uf{
    display: block;
    position: relative;
    left: 25px;
    background: transparent;
    border: 1px solid #A9A9A9;
}

form div#uf{
    display: inline-block;
    position: absolute;
    left: 40px;
}

form button{
    display: inline-block;
    position: relative;
    top: -25px;
    left: 80px;
}

form a{
    display: inline-block;
    position: relative;
    top: -25px;
    left: 80px;
}
</style>

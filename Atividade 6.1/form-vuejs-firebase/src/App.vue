<template>
  <div id="app">
    <div class="container">
      <header>
        <h1 id="titulo">Formulário</h1>
      </header>
      <div class="#f5f5f5 grey lighten-4" id="app">
        <form class="col s10" v-on:submit.prevent="salvar">
          <div class="row">
		        <div class="input-field col s8">
              <i class="material-icons prefix">email</i>
              <input id="email" type="email" class="validate" v-model="vetDados.email">
              <label for="email" data-error="e-mail inválido" data-success="Ok!">Endereço de e-mail: </label>		  
            </div>
          </div>

          <div class="row">
            <div class="input-field col s8">
              <i class="material-icons prefix">perm_identity</i>
              <input id="nome" type="text" class="validate" v-model="vetDados.nome">
              <label for="nome">Nome: </label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s4">
			        <i class="material-icons prefix">list</i>
              <select class="browser-default" id="sexo" v-model="vetDados.sexo">
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
              <select class="browser-default" id="curso" v-model="vetDados.curso">
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
              <input id="endereco" type="text" class="validate" v-model="vetDados.endereco">
              <label for="endereco">Endereço para correspondência: </label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s8">
			        <i class="material-icons prefix">mode_edit</i>
              <input id="complemento" type="text" class="validate" v-model="vetDados.complemento">
              <label for="complemento">Complemento do Endereço: </label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s5">
              <i class="material-icons prefix">mode_edit</i>
              <input id="cep" type="text" v-model="vetDados.cep">
              <label for="cep">CEP: </label>   
            </div>
          </div>

          <div class="row">
            <div class="input-field col s8" id="divMunicipio">
              <i class="material-icons prefix">mode_edit</i>
              <input id="municipio" type="text" class="validate" v-model="vetDados.municipio">
              <label for="municipio">Município: </label>
            </div>
            <div class="input-field col s2">
              <select class="browser-default" id="uf" v-model="vetDados.uf">
              <option v-for="option in opcUf" v-bind:value="option.value">
                {{ option.text }}
              </option>
              </select>
              <label for="uf">UF: </label>
            </div>
          </div>

          <div class="row" id="checkbox">
              <input type="checkbox" id="checkbox" v-model="checked">
              <label for="checkbox">Gravar no Firebase {{checked}}</label>
          </div>

          <div class="row">
            <div class="input-field col s4">
              <button class="btn waves-effect waves-light" type="submit" name="action" id="salvar">Salvar
                <i class="material-icons right">send</i>
              </button>
            </div>
          
            <div class="input-field col s4">
                <a class="waves-effect waves-light btn" href="lista-cadastros.html"><i class="material-icons right">toc</i>Ver Todos</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import Firebase from 'firebase'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBBNolbt-g7fYaIHlLUNUFRhRG_cdTBkGM",
    authDomain: "inscritos-44e7e.firebaseapp.com",
    databaseURL: "https://inscritos-44e7e.firebaseio.com",
    projectId: "inscritos-44e7e",
    storageBucket: "inscritos-44e7e.appspot.com",
    messagingSenderId: "1004259866200"
  };

  let app = Firebase.initializeApp(config);
  let db = app.database();
  let dbRef = db.ref("inscritos-44e7e");

  export default {
    firebase:{
      dadosFirebase: dbRef
    }, 

    data(){
      return{
        checked: false,
        objDados:[],

        vetDados: {
          email: "",
          nome: "",
          sexo: "",
          curso: "",
          endereco: "",
          complemento: "",
          cep: "",
          municipio: "",
          uf: "",
        },
        opcSexo: [
          {text: '', value: '', disabled: 0},
          {text: 'Masculino', value: 'masculino'},
          {text: 'Feminino', value: 'feminino'}
        ],

        opcCurso: [
          {text: '', value: '', disabled: 0},
          {text: 'Curso Técnico em Informática', value: 'informatica',},
          {text: 'Curso Técnico em Alimentos', value: 'alimentos'},
          {text: 'Curso Técnico em Agropecuária', value: 'agropecuaria'}
        ],

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
        ], 
      }
    },

    methods: {
      salvar: function(){
        if(this.checked){
          alert("Gravado no Firebase");
          dbRef.push(this.vetDados);
        } else {
          this.objDados.push(JSON.stringify(this.vetDados));
          localStorage.setItem("inscritos", this.objDados);
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
      left: 15%;
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
      left: 70px;
  }

  div#checkbox{
    display: block;
    position: relative;
    top: -5px;
    left: 32px;
  }
</style>

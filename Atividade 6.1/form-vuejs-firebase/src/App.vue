<template>
  <div id="app">
    <div class="container">
      <header>
        <h1 id="titulo">Formulário</h1>
      </header>
      <div class="#f5f5f5 grey lighten-4" id="divform">
        <form class="col s10" v-on:submit.prevent="salvar">
          <div class="row">
            <div class="input-field col s4">
			        <i class="material-icons prefix">list</i>
              <select class="browser-default" id="sexo" v-model="newArray.sexo">
                <option value="" selected></option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>                  
                </option>
			        </select>
              <label for="sexo">Sexo: </label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s4">
              <button class="btn waves-effect waves-light" type="submit" name="action" id="salvar">Salvar
                <i class="material-icons right">send</i>
              </button>
            </div>
            <div class="row">
              <input type="checkbox" id="checkbox" v-model="checked">
              <label for="checkbox">Gravar no Firebase {{checked}}</label>
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
    apiKey: "AIzaSyC9gNJ1knLIOlmLyrgOn3sBV3o2tQow-L0",
    authDomain: "form-vuejs-firebase.firebaseapp.com",
    databaseURL: "https://form-vuejs-firebase.firebaseio.com",
    projectId: "form-vuejs-firebase",
    storageBucket: "form-vuejs-firebase.appspot.com",
    messagingSenderId: "304396761781"
  };

  let app = Firebase.initializeApp(config);
  let db = app.database();
  let dbRef = db.ref("form-vuejs-firebase");

  export default {
    firebase:{
      dadosFirebase: dbRef
    }, 
    /*name: 'app',*/

    data(){
      return{
        checked: false,
        objDados:[],
        newArray: {
          sexo: ""
        }
      }
    },
    methods: {
      salvar: function(){
        if(this.checked){
          alert("Gravado no Firebase");
          dbRef.push(this.newArray);
        } else {
          this.objDados.push(JSON.stringify(this.newArray));
          localStorage.setItem("inscritos", this.objDados);
        }
      }
    }
  }
</script>

<style>
  select#sexo, select#curso{
    display: block;
    position: relative;
    left: 87px;
    top: -5px;
    background: transparent;
    border: 1px solid #A9A9A9;
}
</style>

<template>
    <div id="app2">
        <h1>Cadastros</h1>
        <table id="tblDados" class="highlight bordered">
            <thead>
				<tr>
					<th>Endereço de e-mail</th>
					<th>Nome</th>
					<th>Sexo</th>
					<th>Curso</th>
					<th>Endereço para Correspondência: </th>
					<th>Complemento do Endereço: </th>
					<th>CEP</th>
					<th>Município</th>
					<th>UF</th>
				</tr>
            </thead>
            <tbody>
				<tr v-for="row in rows">
					<td><input type="text" v-model="row.email" class="browser-default"></td>
					<td><input type="text" v-model="row.nome" class="browser-default"></td>
					<td><input type="text" v-model="row.sexo" class="browser-default"></td>
					<td><input type="text" v-model="row.curso" class="browser-default"></td>
					<td><input type="text" v-model="row.endereco" class="browser-default"></td>
					<td><input type="text" v-model="row.complemento" class="browser-default"></td>
					<td><input type="text" v-model="row.cep" class="browser-default"></td>
					<td><input type="text" v-model="row.municipio" class="browser-default"></td>
					<td><input type="text" v-model="row.uf" class="browser-default"></td>
				</tr>
            </tbody>
        </table>
        <div class="row">
            <div class="input-field col s4">
                <a class="waves-effect waves-light btn" href="form-cadastros.html"><i class="material-icons right">mode_edit</i>Voltar ao formulário</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'app2',
        data() {
            rows: []
        },
        created: function(){
            var dados = JSON.parse(localStorage.getItem("inscritos"));
            for(var i=0; i<dados.length; i++){
                this.rows.push({
                    email: dados[i].email,
                     nome: dados[i].nome,
                    sexo: dados[i].sexo,
                    curso: dados[i].curso,
                    endereco: dados[i].endereco,
                    complemento: dados[i].complemento,
                    cep: dados[i].cep,
                    municipio: dados[i].municipio,
                    uf: dados[i].uf
                })
            }
        }
    }
</script>

<style>
h1{
    text-align: center;
}

table input{
    display: block;
    box-shadow: none;
    border: none;
    outline: none;
    
}
</style>
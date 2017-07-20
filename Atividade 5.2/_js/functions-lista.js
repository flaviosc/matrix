new Vue({
    el: '#tblDados',
        data: {
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
});
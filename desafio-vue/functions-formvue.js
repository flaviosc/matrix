var cadastro = {
    email: "",
    nome: "",
    sexo: "",
    curso: "",
    endereco: "",
    complemento: "",
    cep: "",
    municipio: "",
    uf: "",
};

new Vue({
    el: '#divform',
    data: function (){
        return cadastro;  
    },
    methods: {
       salvar: function(){
           localStorage.setItem("objDados", JSON.stringify(cadastro));
       }
    },
});

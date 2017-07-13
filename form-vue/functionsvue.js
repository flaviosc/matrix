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
    created: function(){
        var dadosCadastro = JSON.parse(localStorage.getItem("objDados")); 
        this.email = dadosCadastro['email'];
        this.nome = dadosCadastro['nome'];
        this.sexo = dadosCadastro['sexo'];
        this.curso = dadosCadastro['curso'];
        this.endereco = dadosCadastro['endereco'];
        this.complemento = dadosCadastro['complemento'];
        this.cep = dadosCadastro['cep'];
        this.municipio = dadosCadastro['municipio'];
        this.uf = dadosCadastro['uf'];
    }
});
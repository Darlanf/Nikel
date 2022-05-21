const nome = "Darlan Fabricio";
let nome2 = "";
let pessoaDefault = {
    nome: "Darlan Fabricio",
    idade: "33",
    trabalho: "Analista"
}

let nomes = ["Darlan Fabricio", "Sergio Silveira", "Eliane Santos"];

let pessoas = [
    {
        nome: "Darlan Fabricio",
        idade: "33",
        trabalho: "Analista"
    },
    {
        nome: "Eliane Silva",
        idade: "53",
        trabalho: "Comerciante"
    }
];


function alterarNome()  {
    nome2 = "Sergio"
    console.log("valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome)    {
    nome2 = novoNome;
    console.log("valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("nome:");
    console.log(pessoa.nome);

    console.log("idade:");
    console.log(pessoa.idade);

    console.log("trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa){
     pessoas.push(pessoa) 
}

function imprimirPessoas()  {
    console.log("--------IMPRIMIR PESSOAS---------'")
    pessoas.forEach((item) => {
        console.log("nome:")
        console.log(item.nome)
        console.log("idade:");
        console.log(item.idade);
        console.log("trabalho:");
        console.log(item.trabalho);
    }) 
}

imprimirPessoas()

adicionarPessoa({
     nome: "Sergio Silveira",
     idade: "63",
     trabalho: "carteiro"
});

console.log(pessoas);
//imprimirPessoa(pessoaDefault);

//recebeEalteraNome("Joao Silva Pereira");
//recebeEalteraNome("Darlao Santos");

//alterarNome();
alert("Bem vindo ao nosso site!");

let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 100;

alert("Erro! Preencha todos os campos");

let mensagemDeErro="Preencha todos os campos";

alert(mensagemDeErro);

nome = prompt("Qual seu nome?");
idade = prompt("Qual sua idade?");

if(idade >= 18)
    alert("Pode tirar habilitação!");
else
    alert("Não pode tirar habilitação!");
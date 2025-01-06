alert("Bem vindo ao nosso site!");

let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 100;
let pontuacao = 105;

alert("Erro! Preencha todos os campos");

let mensagemDeErro="Preencha todos os campos";

alert(mensagemDeErro);

nome = prompt("Qual seu nome?");
alert(`Bem vindo ${nome}`);

idade = prompt("Qual sua idade?");
if(idade >= 0)
    alert('O valor é válido!');
else
    alert('Invalido!!Não são aceitos numeros negativos.');


dia = prompt("Qual o dia da semana?");
if(dia == "Sabado" || dia == "Domingo")
    alert("Bom final de Semana");
else
    alert("Boa Semana");

if(idade >= 18)
    alert("Pode tirar habilitação!");
else
    alert("Não pode tirar habilitação!");


alert(`O saldo disponivel na sua conta é: ${saldoDisponivel}`);


if (pontuacao >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}


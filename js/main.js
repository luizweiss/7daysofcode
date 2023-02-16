//Exercício dia 1 solucionado
/*
let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes');
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor');
}

if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo');
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo');
}

if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes');
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor');
}
*/

//Exercício dia 2 solucionado
/*
const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

const msgInicial = `Seu nome é ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;

alert(msgInicial);

var gostaLinguagem = prompt("Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO.");

const msgFinal1 = `Muito bom! Continue estudando e você terá muito sucesso.`;
const msgFinal2 = `Ahh que pena... Já tentou aprender outras linguagens?`;

if (gostaLinguagem != 1 && gostaLinguagem != 2) {
  gostaLinguagem = prompt("Responda com o número 1 para SIM ou 2 para NÃO.");
}

if (gostaLinguagem == 1) {
  alert(msgFinal1);
}

if (gostaLinguagem == 2) {
  alert(msgFinal2);
}
*/

//Exercício dia 3

const area = prompt("Qual área deseja seguir? Front-End ou Back-End?");
var especialidade = "";

if (area == 'Front-End' || area == 'Front End' || area == 'FrontEnd') {
  var especialidade = prompt("Deseja se especializar em React ou Vue?");
}

if (area == 'Back-End' || area == 'Back End' || area == 'BackEnd') {
  var especialidade = prompt("Deseja se especializar em C# ou Java?");
}

const msgEsp = prompt(`Legal! Você escolheu: ` + especialidade + `. Deseja seguir se especializando na área escolhida? (Digite 1). Ou seguir se desenvolvendo para se tornar Fullstack? (Digite 2).`);

if (msgEsp == 1) {
  alert("Parabéns! Você inicialmente escolheu seguir a área " + area + ", se especializando em " + especialidade + ".");
}

if (msgEsp == 2) {
  alert("Você escolheu seguir a carreira Fullstack.");

  var tecnologias = prompt("Quais tecnologias gostaria de se especializar ou conhecer?");
  var maisTecnologias = prompt("Gostaria de aprender mais alguma tecnologia? S ou N?");
  while (maisTecnologias == "S") {
    tecnologias = `${tecnologias}, ${prompt("Quais tecnologias gostaria de se especializar ou conhecer?")}`;
    var maisTecnologias = prompt("Gostaria de aprender mais alguma tecnologia? S ou N?");
  }
  alert("Parabéns! Você inicialmente escolheu seguir a área " + area + ", se especializando em " + especialidade + ", mas também deseja se tornar um programador Fullstack, conhecendo: " + tecnologias);
}
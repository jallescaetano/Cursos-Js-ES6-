// var graduacao = false, 
//     doutorado = true;

// if(graduacao){
//   console.log('Sim, ele é Graduado');
// } else if(doutorado) {
//   console.log('Dooutorado');
// } else {
//   console.log('Ele Não é Graduado');
// }

// var nome = 10 >= 25;
// var x = '10';

// console.log(x === '10' );

// if(nome){
//   console.log(nome);
// } else {
//   console.log(nome);
// }


// if((5 - 10) || (5 + 5)){
//   console.log('Verdadeiro');
// } else {
//   console.log('Falso');
// }

// var condicinais = (5 - 5) || ( 5 + 15 ) && ( 10 * 5 );

// console.log(condicinais);

// var corFavorita = 'Verde';

// switch (corFavorita) {
//   case 'Azul':
//     console.log('Cor Azul');
//   break;
//   case 'Vermelho' :
//   console.log('Red');
//   default:
//   console.log('Nenhuma Cor');
//     break;
// }



// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var idade = 33,
    geraldo = 30;

    if(idade > geraldo){
      console.log('é maior');
    } else if( idade < geraldo){ 
      console.log('é menor');
    } else {
      console.log('é igual');
    }


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - 's') && (5 - 2);
console.log(expressao);


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);




// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china ) {
    console.log('Brasil tem mais habitantes');
} else {
  console.log('Brasil tem menos habitantes');
}




// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

var corFavorita = 'Verde';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.')
    break;
  case 'Verde':
    console.log('Olhe para a floresta')
    break;
  default:
    console.log('Feche os olhos.')
}
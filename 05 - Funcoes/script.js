// function areaQuadrada(lado) {
//   return lado * lado;
// }

// function pi() {
//     return 3.14;
// }

// var total = 5 * pi();

// function imc(peso, altura) {
//   var imc = peso / (altura ** altura);
//   return imc;
// }

// function corFavorita(cor) {
//   if (cor === 'azul') {
//       return 'Eu gosto do céu';
//   } else if(cor === 'verde') {
//       return 'Eu gosto de Mato';
//   } else {
//     return 'Eu não gosto de Cores';
//   }
// }

function mostraConsole() {
  console.log('Oi');
}

// // addEventListener('click', mostraConsole);

// console.log(corFavorita('red'));


// function imc2(peso, altura) {
//   var imc = peso / (altura ** altura);
//   // return imc;
//   console.log(imc);
// }
// imc2 = imc2(85, 1.67);

// // console.log(imc2);

// function terceiraIdade(idade) {

//   if (typeof idade !== 'number' ) {
//     return 'Por favor digite um número';
//   } else if(idade >= 60) {
//     return true;
//   } else {
//     return false;
//   }
  
// }

// console.log(terceiraIdade());

// var totaPaises = 193;
// function PaisesFaltam(paisesVisitados) {
  

//   return `faltam visitar ${totaPaises - paisesVisitados} países`;
// }

// var profissao = 'Programador';

// function dados() {
//   var nome = 'Jalles',
//       idade = 33;
//   function outroDados() {
//     var endereco = 'Goiânia',
//         idade = 34;

//         return `${nome}, ${idade}, ${endereco}, ${profissao}`;
//   }

//   return outroDados();
// }

// console.log(dados());


// Crie uma função para verificar se um valor é Truthy

function isTrue(valor) {
  return !!valor;
}



// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function quadrado(lado) {
    var perimetro = lado * 4;
    return perimetro;
}

console.log(quadrado(45));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function meuNome(nome, sobrenome) {
  return `meu nome é ${nome} ${sobrenome}` ; 
}

console.log(meuNome('Jalles', 'Caetano'));


// Crie uma função que verifica se um número é par

function isEven(numero) {
  var modulo = numero % 2;
    // return numero / 2;

    if (modulo === 0) {
        return true;
    } else {
      return false;
    }

}

console.log(isEven(5));
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDados(info){
  return typeof info;
}

console.log(tipoDados(35));


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('click', mostraConsole);


// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));

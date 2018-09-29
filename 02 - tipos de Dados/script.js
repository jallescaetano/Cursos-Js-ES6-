var nome = 'Jalles',
    sobrenome = 'Caetano',
    idade = 33,
    time = null,
    simbolo = Symbol();

    console.log(typeof nome);
    // STRINGS

var nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);

var gols = 1000;
// var frase = 'Romario fez ' + gols + ' gols';
var frase = `Romario fez  ${gols * 2} gols`;


console.log(frase);


var ano = 2018,
    mes =  10;

console.log(ano + mes);


// EXERCICIO
var jogador = 'Romario';

var gols = '1000';

var idade = '33';

var nome = 'Jalles',
    sobrenome = 'Caetano';
    nomeCompleto = `${nome} ${sobrenome}`;

    

var frase = `It's time`;

var tipoNome = typeof nomeCompleto;

console.log(nomeCompleto, frase,  tipoNome);



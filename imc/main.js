function calcularIMC(peso, altura) {
  var imc = peso / (altura * altura);
  return imc.toFixed(2); 
}

function calcularAreaCirculo(raio) {
  var area = Math.PI * raio * raio;
  return area.toFixed(2); 
}

function calcularVolumeEsfera(raio) {
  var volume = (4 / 3) * Math.PI * Math.pow(raio, 3);
  return volume.toFixed(2); 
}

function substituirLetraA(frase) {
  var novaFrase = frase.replace(/a/gi, "e");
  return novaFrase;
}


var peso = prompt("Digite o peso em quilogramas:");
var altura = prompt("Digite a altura em metros:");


peso = parseFloat(peso);
altura = parseFloat(altura);

var imc = calcularIMC(peso, altura);

alert("Seu IMC é: " + imc);

// CALCULAR RAIO

var raio = prompt("Digite o raio do círculo:");


raio = parseFloat(raio);

var area = calcularAreaCirculo(raio);
alert("A área do círculo é: " + area);


//CALCULAR VOLUME ESFERA

var raio = prompt("Digite o raio da esfera:");

raio = parseFloat(raio);

var volume = calcularVolumeEsfera(raio);
alert("O volume da esfera é: " + volume);

//trocar letras

// Solicitação de entrada do usuário
var frase = prompt("Digite uma frase:");

var novaFrase = substituirLetraA(frase);
alert("Frase com substituição: " + novaFrase);
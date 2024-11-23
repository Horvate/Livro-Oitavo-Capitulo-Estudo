const calcularMedia = (...notas) => {
const num = notas.length;          // notas é um array
if(num == 0) {
  console.log("Informe, no menimo, uma nota");
  return
}
  let soma = 0;   // vai acumular a soma das notas

for (const nota of notas) {
  soma += nota;      // soma o valor dos argumentos
}
  const media = soma /num     // calcula a media
  console.log(`Média: ${media.toFixed(2)}`);
}

// exemplos de chamada de calcular media() com n° de parametros diferentes

calcularMedia(6, 7, 8);       // Media: 7.0
calcularMedia(2, 10)               // Media: 6.0
calcularMedia(7.5, 10, 8, 9.5);               // Media: 8.8
calcularMedia()               // Media: informe, no, minimo, uma nota
const mostrarHora = () => {
const data = new Date();
const hora = data.getHours();
const min = data.getMinutes();
const seg = data.getSeconds();
console.log(`Atenção para o horário: ${hora}:${min}:${seg}`);
}
setInterval(mostrarHora, 5000);

// mesmo script, utilizando uma função anônima

setInterval(() => {
  const data = new Date();
  const hora = data.getHours();
  const min = data.getMinutes();
  const seg = data.getSeconds();
  console.log(`Atenção para o horário: ${hora}:${min}:${seg}`);
}, 5000)
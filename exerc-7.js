const form = document.querySelector("form");
const select = document.querySelector("select");
const resp = document.querySelector("h3");

form.inNao.addEventListener("click", () => {
  form.inSelect.style.display = "none"
});

form.inSim.addEventListener("click", () => {
  form.inSelect.style.display = "block"
});

form.addEventListener("submit", (e) =>  {
  e.preventDefault();

  let lista = "";
  const valor = Number(form.inValor.value);
  
  const desconto = calcularDesconto(valor);
  
  const valorDescon = valor - desconto;
  let valorDesconto = valorDescon.toFixed(2);
  
  lista += `Desconto R$: ${desconto}<br>A Pagar R$: ${valorDesconto}`;

  console.log(valorDescon)

  resp.innerHTML = lista;

  form.reset();
  inH3.style.display = "block";

  
});


const calcularDesconto =  (valor) => {

  const convenio = form.inSelect.value;
  let = lista = "";

  const descon10 = valor * (10 / 100);
  const descon20 = valor * (20 / 100);
  const descon50 = valor * (50 / 100);

  if(convenio == 0) {
    lista += descon10.toFixed(2);
  } else if(convenio == 1) {
    lista += descon20.toFixed(2);
  } else if(convenio == 2) {
    lista += descon50.toFixed(2);
  }
  
    return lista
};
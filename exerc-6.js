const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nomeAluno = form.inNome.value;
  
  let lista = "";
  const ValidarNomeCompleto = validarNome(nomeAluno);
  const obterUltimoNome     = obterSobrenome(nomeAluno);
  const numVogais        = contarVogais(nomeAluno);

  if (ValidarNomeCompleto == "Nome completo") {
    lista += `Senha Inicial: ${obterUltimoNome}0${numVogais}`
  } else {
    lista += `Nome incompleto`
  }

  resp.innerHTML = lista.toLowerCase();
  inH3.style.display = "block"
  form.reset();
});


const validarNome = (nomeAluno) => {

  let lista = "";
  const nomeCompleto = nomeAluno.split(" ");

  if (nomeCompleto.length >=2) {
    lista += "Nome completo"
  } else {
    lista += "Nome incompleto"
  }
  
  return lista
} 

const obterSobrenome = (nomeAluno) => {
  lista = "";

  const sobrenome = nomeAluno.split(" ");
  
  lista += sobrenome.slice(-1);

  return lista
 
}

const contarVogais = (nomeAluno) => {

  lista = "";

  const pegarVogais = nomeAluno.match(/[aeiouAEIOU]/g);

  const numVogais = pegarVogais.length;


  lista += numVogais;

  return lista
  
}
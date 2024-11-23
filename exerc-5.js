const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let   lista = "";
  const nome = form.inNome.value;
  const idade = Number(form.inIdade.value);

  const tracos = retornarTracos(nome);
  const categoria = categorizarAluno(idade);

 lista += `${nome}<br>${tracos}<br>Categoria: ${categoria}`;

  resp.innerHTML = lista;
 
  form.reset()
  inH3.style.display = "block"
}); 

const categorizarAluno = (idade) => {
  let classif

  if(idade <= 12) {
    classif = "Infantil"
  } else if (idade >= 13 && idade <= 18) {
    classif = "Juvenil"
  } else {
    classif = "Adulto"
  }
  
  return classif
  
}

const retornarTracos = (nome) => {

  let tracos = "";

    for (let i = 0; i <= nome.length; i++) {
      tracos += " - "
    }
  return tracos
   
}
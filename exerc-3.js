const form = document.querySelector("form");   // obtém elementos da página
const resp = document.querySelector("pre");

const itens = [];     // vetor global para armazenar os itens do pedido


form.rbPizza.addEventListener("click", () => {      // quando o radio button é clicado

    inPizza.style.display = "block";     // exibe select das pizzas

    inBebida.style.display = "none";     // oculta select das bebidas 

});

form.rbBebida.addEventListener("click", () => {    // quando o radio button é clicado

   inBebida.style.display = "block";              // exibe o select das bebidas

   inPizza.style.display = "none";                 // oculta o select das pizzas

});

form.inDetalhes.addEventListener("focus", () => {    // quando o campo recebe o foco
  
  if (form.inPizza.checked) {              // se o radiobutton estiver marcado 
    const pizza = form.inPizza.value      // obtém value do item delecionado
    
    // uso do operador ternário, para indicar o número de sabores
    const num = pizza == "media" ? 2 : pizza == grande ? 3 : 4;
    
    // atributo placeholder exibe um dica do preenchimento do campo
    form.inDetalhes.placeholder = `Até ${num} sabores`;
  }
});

form.inDetalhes.addEventListener("blur", () => {      // quando campo perde o foco
  form.inDetalhes.placehorder = "";     // limpa a dica de preenchimento
});

form.addEventListener("submit", (e) => {
  e.preventDefault();  // evita o envio do form
  let produto;
  
  if (form.rbPizza.checked) {
    const num = form.inPizza.selectedIndex;          // obtém número do item selecionado
    produto = form.inPizza.options[num].text;         // text do item selecionado
  } else {
    const num = form.inBebida.selectedIndex;
    produto = form.inBebida.options[num].text;
  }
  const detalhes = form.inDetalhes.value;      // conteúdo do detalhes
  itens.push(produto + "("+ detalhes +")");     // adicionar ao vetor 
  resp.innerHTML = itens.join("\n");           // exibe os itens do produto

  form.reset();
  form.rbPizza.dispatchEvent(new Event("click")); // dispara click em rbPizza
});
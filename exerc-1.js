const form = document.querySelector("form"); // obtem elementos da página
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

form.addEventListener("submit", (e) => {
  e.preventDefault();        // evita envio do form

  const modelo = form.inModelo.value;    // obtém conteúdo dos campos 
  const ano = Number(form.inAno.value);
  const preco = Number(form.inPreco.value);


  const classificacao = classificarVeiculo(ano);     // chama as funções e atribui
  const entrada = calcularEntrada(preco, classificacao);    // ...retorna ás variáveis
  const parcela = (preco - entrada) / 10   // usa retorno da função para cálculo 

  resp1.innerHTML = `${modelo} - ${classificacao}`; // exibe as resposta
  resp2.innerHTML = `Entrada R$: ${entrada.toFixed(2)}`;
  resp3.innerHTML = `+10x de R$: ${parcela.toFixed(2)}`;


  
    
}); 


// função recebe o ano do veículo como parâmetro
  const classificarVeiculo = (ano) => {
  const anoAtual = new Date().getFullYear();   // obtém ano atual
  let classif           

  if (ano == anoAtual) {      // condições para classificação do veículo
    classif = "Novo";
  } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
    classif = "Seminovo";
  } else {
    classif = "Usado";
  }
    return classif;       // retorna a classificação
  }
  // função recebe valor e status do veículo como parâmetro
  const calcularEntrada = (valor, status) => 
    status == "novo" ? valor * 0.5 : valor * 0.3;

    
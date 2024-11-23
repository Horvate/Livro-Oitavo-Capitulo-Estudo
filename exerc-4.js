const vinhos = [];

function titulo(texto) {    // recebe, por parâmetro, o texto a ser exibido
  console.log();
  console.log(texto);
  console.log("=".repeat(40));
}

// programa principal
  
do {
  titulo("===< Cadastro de Vinhos >===");
  console.log("1. Inclusão de Vinhos");
  console.log("2. Listagem de Vinhos");
  console.log("3. Pesquisa por Tipo");
  console.log("4. Média e Destaques");
  console.log("5. Finalizar");
  const opcao = Number(prompt("Opção: "));

  if(opcao == 1) {
    incluir();
  } else if (opcao == 2) {
    listar();
  } else if (opcao == 3) {
    pesquisar();
  } else if (opcao == 4) {
    calcularMedia();
  } else {
    break
  }
} while (true);

function incluir() {
  
  titulo("===< Inclusão de Vinhos >==");

  const marca = prompt("Marca: ");  // lê os dados do vinho
  const tipo  = prompt("Tipo:  ");
  const preco = Number(prompt("Preço: "));

  vinhos.push({marca, tipo, preco});     // insere objeto no vetor

  console.log("OK! Vinho Cadastrado com Sucesso");

}

function listar() {
  
  titulo("===< Listar de Vinhos Cadastrados >===");

  console.log("Marca................Tipo....................Preço R$:");

  // percorrer vetor para exibir todos os venhos
  
  for(const vinho of vinhos) {
    
    console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)}` +                                       `${vinho.preco.toFixed(2).padStart(9)}`);
  }
}

function pesquisar() {
  
  titulo("===< Pesquisa por Tipo de Vinhos >===");

  const pesq = prompt("Tipo: ");     // lê o tipo de vinho a pesquisar

  let contador = 0;     // contador para verificar se existe

  console.log("Marca................Tipo....................Preço R$:");

  for (const vinho of vinhos) {
    
    if (vinho.tipo.toUpperCase().includes(pesq.toUpperCase())) {
      
      console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)}`       +                                 `${vinho.preco.toFixed(2).padStart(9)}`);
      
      contador++ // se entrou no if, icrementa no contador
    }
  }
  // se percorreu todos os vinhos e contador continua == 0, significa que não há

  if (contador == 0) {
    
    console.log(`Obs. : Não há vinhos cadastrados do tipo "${pesq}"`);
  }
}

function calcularMedia() {
  
  titulo("===< Média e Destaques do Cadastro de Vinhos >===");

  const num = vinhos.length   // obtém número de elementos 

  if (vinhos.length == 0) {
    
  console.log(`Obs. : Não há vinhos cadastrados`);
    
    return
    
  }
  
  let total = 0;  // para acumular o total
  
  for (const vinho of vinhos) {
    
    total+= vinho.preco
    
  }
  
  const media = total / num;   // calcula o preço médio
  const vinhos2 = [...vinhos];   // cria uma cópia do vetor original

  vinhos2.sort((a, b) => a.preco - b.preco);

  const maior = vinhos2[0];
  const menor = vinhos2[num-1];

  console.log(`Preço Médio dos Vinhos R$: ${media.toFixed(2)}`);
  console.log(`Menor Valor R$: ${menor.preco.toFixed(2)} - ${menor.marca}`);
  console.log(`Maior Valor R$: ${maior.preco.toFixed(2)} - ${maior.marca}`);
}
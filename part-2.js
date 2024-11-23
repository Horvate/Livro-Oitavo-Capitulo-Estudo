const situacao = (NodeIterator, media) => {
  if (nota >= media) {
    alert("Aprovado");
  } else {
    alert("Reprovado");
  }
}
const prova1 = Number(prompt("Qual Nota"));

situacao(prova1, 7)  // chama a função situação passando 2 parâmetros

// const situacao = (nota, media) => {...} 

const siituacao = (nota, media) => {
  const resultado = nota >= media ? "Aprovado" : "Reprovado";
  return resultado
}

const aluno1 = situacao(prova1, 7);
resp.innerText = `Situação: ${aluno1}`

alert(`A situação do aluno é: ${situacao(prova1, 7)}`);

const situacao = (nota, media) => (nota >= media ? "Aprovado" : "Reprovado"); 
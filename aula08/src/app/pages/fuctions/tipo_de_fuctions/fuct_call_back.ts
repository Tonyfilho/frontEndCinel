/// funções callbacks são funçoes que retornam outra função.

export function processar(valor: number, callback: (n: number) => void) {
  console.log('Processando.....');
  callback(valor);
}

processar(10, (n) => console.log(`Valor processado: ${n + 10}`));


export function saudacao() {
  console.log("Bem-vindo!");
}

setTimeout(saudacao, 3000); // Executa após 3 segundos

///Arrow Functions

///quando eu não tenho bloco {....} o Js ja coloca um retorno invisivel para nós
export const somar = (a: number, b: number) => a + b;

/*quando eu tenho o bloco {....}, eu posso ter mais de uma execução e retornar o que eu quero*/
export const somarComBlocoERetorno = (a: number, b: number) => {
  console.log('antes da soma variavel a: ' + a);
  console.log('antes da soma variavel b: ' + b);
  return a + b;
};

// 1. Sistema de Verificação de Idade com if-else
// // Este sistema verifica se a pessoa tem idade suficiente para acessar um conteúdo restrito, como um site ou serviço. 
// Se a idade for maior ou igual a 18 anos, a pessoa tem permissão para acessar o conteúdo; caso contrário, 
// uma mensagem de erro é exibida informando que a idade mínima não foi atingida.

let idadefilme = '18'

if (idadefilme >= 18) {
    console.log('filme liberado, aproveite o filme escolhido 😎');
} else {
    console.log('filme bloqueado, infelizmente você nao possui', idadefilme, 'anos para acessar o filme ❌');
}
// 4. Validação de Palavra em Texto
// Descrição: Crie um programa que receba um texto e uma palavra, e verifique se a palavra está
// contida no texto.
// Requisitos:
// Use métodos de string, como includes, para realizar a verificação.
// Utilize if/else para mostrar uma mensagem indicando se a palavra foi encontrada ou não.
// Pegue a mensagem com prompt() e exiba com Alert()

let palavra = prompt("casa")
let text = "fui para minha casa ontem a noite!"
if(text.includes(palavra)){
    alert(`A palavra ${palavra} foi encontrada no texto.`);
}
else{
    alert(`A palavra ${palavra} não foi encontrada no texto.`);
}
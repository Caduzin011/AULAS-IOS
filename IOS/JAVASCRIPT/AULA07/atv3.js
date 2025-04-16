// 3. Sistema de Classificação
// Descrição: Crie um programa que receba uma nota numérica e retorne uma classificação de letra
// (por exemplo, A, B, C, D, F).
// Requisitos:
// Por exemplo:
// Nota de 90 a 100: “A”
// Nota de 80 a 89: “B”
// Nota de 70 a 79: “C”
// Nota de 60 a 69: “D”
// Abaixo de 60: “F”
// Exiba o resultado no console.




let nota = 80
if (nota >= 90 && nota <= 100) {
    console.log(`Parabéns! Você foi otima. sua é ${nota}, você tirou A!`);
} 

if (nota >= 80 && nota <= 89) {
    console.log(`Parabéns! Você foi bem. sua é ${nota}, você tirou B!`);
} 

if (nota >= 70 && nota <= 79) {
    console.log(`Estamos no caminho certo! sua é ${nota}, você tirou C!`);
} 

if (nota >= 60 && nota <= 69) {
    console.log(`Continue! Você ainda pode melhorar. sua é ${nota}, você tirou D!`);
} 

if (nota < 60){
    console.log(`Infelizmente! Você não foi tão bem. sua é ${nota}, você tirou F!`);
} 
else {
    console.log("");
}
// Questão 1:
// Crie um loop `while` que imprima os números pares de 2 a 10.

let contador = 0
while (contador <= 10) {
    contador++
    if(contador % 2 == 0){
        console.log(contador);
    }
} 


// Questão 2:
// Crie um loop `do-while` que solicite ao usuário que insira sua idade. Continue pedindo até que
// o usuário insira uma idade válida (ou seja, uma idade maior do que 0).


let n1 = 0, n2 = 1, contador = 0;
while (contador < 10) {
  console.log(n1);
  let proximo = n1 + n2;
  n1 = n2;
  n2 = proximo;
  contador++;
}


// Questão 3:
// Crie um loop `for` que exiba a tabuada do 7, ou seja, os resultados da multiplicação de 7 por
// números de 1 a 10


let tabuada = 7
for (i = 0; i <= 10; i++) {
    console.log(tabuada*i);
}


// Questão 4:
// Crie um loop `while` que gere uma sequência de Fibonacci de 10 números. A sequência
// começa com 0 e 1, e cada número subsequente é a soma dos dois números anteriores.


let n = 10
fibonacci = [0, 1]
for (i = 2; i < n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
}
console.log(fibonacci.slice(0,n));


// Questão 5:
// Crie um loop `for` que imprima os números primos de 1 a 20. Um número primo é aquele que
// é divisível apenas por 1 e por ele mesmo.


for (let i = 2; i <= 20; i++) {
    let primo = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        primo = false;
        break;
      }
    }
    if (primo) {
      console.log(i);
    }
  }
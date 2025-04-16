// 2. Manipulação de String – Formatação de Nome
// Descrição: Crie um programa que receba uma string com o nome completo do aluno e retorne o
// nome e sobrenome separados.
// Requisitos:
// Utilize métodos de string (como split, toUpperCase, substring, etc.) para separar e reorganizar o
// nome.
// Considere nomes compostos e garanta que o últimos elementos sejam o sobrenome.

let nomeAluno = 'Juliana Ferreira'
let nomeSeparado = nomeAluno.split(" ")

console.log(`Meu nome é ${nomeSeparado[0]} e meu sobrenome é ${nomeSeparado[1]}`);

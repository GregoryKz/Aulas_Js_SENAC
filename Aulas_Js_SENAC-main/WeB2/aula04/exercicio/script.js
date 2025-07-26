// 1. Números de 1 a 30 que são múltiplos de 3
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) console.log(i);
}

// 2. De 0 a 50: par ou ímpar
for (let i = 0; i <= 50; i++) {
  console.log(i + (i % 2 === 0 ? " é par" : " é ímpar"));
}

// 3. Tabuada do 6
for (let i = 1; i <= 10; i++) {
  console.log(`6 x ${i} = ${6 * i}`);
}

// 4. Contagem regressiva de 10 a 0
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// 5. Contar de 5 em 5 até 50
for (let i = 5; i <= 50; i += 5) {
  console.log(i);
}

// 6. De 1 a 20: menor, igual ou maior que 10
for (let i = 1; i <= 20; i++) {
  if (i < 10) console.log(`Número ${i} é menor que 10`);
  else if (i === 10) console.log(`Número ${i} é igual a 10`);
  else console.log(`Número ${i} é maior que 10`);
}


// 7. Números pares de 0 a 20
let i = 0;
while (i <= 20) {
  if (i % 2 === 0) console.log(i);
  i++;
}

// 8. De 1 a 25: múltiplo de 5
let j = 1;
while (j <= 25) {
  console.log(j + (j % 5 === 0 ? " é múltiplo de 5" : ""));
  j++;
}

// 9. Sequência 2, 4, ..., 20
let k = 2;
while (k <= 20) {
  console.log(k);
  k += 2;
}

// 10. De 15 a 5, diminuindo 1 em 1
let l = 15;
while (l >= 5) {
  console.log(l);
  l--;
}

// 11. Somar números de 1 a 10
let m = 1, soma = 0;
while (m <= 10) {
  soma += m;
  m++;
}
console.log("Soma total:", soma);

// 12. Usar prompt() e imprimir de 1 até o número digitado
let numero = parseInt(prompt("Digite um número:"));
let n = 1;
while (n <= numero) {
  console.log(n);
  n++;
}

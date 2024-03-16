let valor = [0, 1, 7, 4, 2, 9] /**vars compostas .*/
valor.sort() /**colocando a var valor em ordem crescente. */
console.log(valor) /**mostrando a var valor */
for (let pos in valor) { /**for é uma estrutura de repetição, e a var pos está guradando os dados da var valor. */
    console.log(`A posição ${pos} tem valor ${valor[pos]}`)
}/**a var pos mostra a posição das vars, a var valor[pos] mostra o dado salvo na var. */

/** for (let pos=0 ; pos<valor.length ; pos++){
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
  }  outro jeito de fazer a mesma repetição...*/
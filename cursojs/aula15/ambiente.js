let num = [5, 8, 2, 9, 3] /* var composta*/
num.push(1) /* acrescenta uma var no final.*/
num.sort() /* colocando as vars em ordem crescente. */
console.log(num) /* mostrando a var num. */
console.log(`O vetor tem ${num.length} posições.`)/** length mostra a qtd de posições. */
console.log(`O primeiro valor do vetor é ${num[0]}`)/**mostrando a posição 1 dos vetores da var num */
let pos = num.indexOf(8) /**indexOf(4) retorna o valor dentro dos parenteses */
if(pos == -1){ /**criando uma condição caso não exista a var procurada. */
    console.log(`O valor não foi encontrado`)
} else { /** caso exista avar mostrar o valor na var pos. */
    console.log(`O valor 8 está na posição ${pos}`)
}
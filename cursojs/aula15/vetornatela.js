
let valor = [0, 1, 7, 4, 2, 9]
valor.sort()
console.log(valor)
/*
for(let pos=0 ; pos<valor.length ; pos++){
    console.log(`A posção ${pos} tem o valor ${valor[pos]}`)
}*/

for (let pos in valor) {
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}
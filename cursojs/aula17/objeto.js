/*let amigo = {nome:`José`, sexo:`M`, peso:85.4, engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)*/

let amigo = {nome:'joao', sexo:'m',peso:100,imagrecer(p=0){
    console.log('Imagreceu!')
    this.peso -= p
}}
amigo.imagrecer(10)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)

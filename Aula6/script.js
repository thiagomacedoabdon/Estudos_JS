//string
let nome = 'Thiago'
let sobrenome = 'Macedo' 
console.log(nome)
console.log(`${nome} ${sobrenome}`) //string concatenada

//number
let idade = 36
console.log(idade)
console.log(idade + 10)
let porcentagem = 10.2 //number - float
console.log(porcentagem + '%')

//boolean (true ou false)
let maiorDeIdade = true
console.log(maiorDeIdade)
let menorDeIdade = false
console.log(menorDeIdade)

//array
let habilidade = ['HTML', 'CSS', 'Javascript', 'Python']
console.log(habilidade)
console.log(habilidade.length) //contar quantidade de itens
console.log(habilidade[2]) //quando quiser consultar um item específico

//object
let pessoa = {
    nome: 'Thiago',
    sobrenome: 'Macedo',
    idade: 36,
    Habilidades: ['C++', 'Python,', 'Java']
}
console.log(pessoa)
console.log(pessoa.sobrenome) //se quiser só 1 item 
console.log(pessoa.habilidades[1]) //mostra a habilidade que está na posição 1

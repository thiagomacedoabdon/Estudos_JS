let idade = prompt('Digite a sua idade')
if (idade >= 18) {
    document.write('Ok, você é maior de idade.')
} else if (idade === 15) {
    document.write('Você tem 15 anos!')
}else {
    document.write('Você não pode acessar!')
}

let nome = prompt('Digite seu nome: ')
if (nome === 'Thiago'|| nome === 'thiago' || nome === 'THIAGO') {
    document.write(`Olá ${nome}, seja bem vindo!`)
} else {
    document.write('Você não tem acesso permitido!')
}

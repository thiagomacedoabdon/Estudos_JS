let inputNota1 = prompt('Digite a primeira nota: ')
let inputNota2 = prompt('Digite a segunda nota: ')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let mediaMinima = 7

let media = (nota1 + nota2) / 2

if (media >= mediaMinima) {
    document.write('Ok, passou de ano!')
} 

else if (media < mediaMinima) {
    document.write('Ops, não passou de ano!')
}

document.write('<br>') //improviso

if (media >= mediaMinima && media === 10){
    document.write('Nossa! Você foi muito bem, continue assim!')
}

else if (media >= mediaMinima && media >=7 && media <=9) {
    document.write('Você foi muito bem! Vamos tentar chegar no 10?!')
} 

else if (media >= mediaMinima && mediaMinima ===7){
    document.write('Passou! Maaasss.. poderia ter sido melhor!')
} 

else{ 
    document.write('No próximo ano se esforce mais.')
}

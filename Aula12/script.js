let opcoesAnos

for (let contador = 2023; contador >= 1900; contador--){
    opcoesAnos += `<option>${contador}</option>`
}
document.querySelector('#ano').innerHTML = opcoesAnos

//exemplo

let lista = ''
let clientes = ['Thiago', 'Roberta', 'Sonia', 'Marjorie', 'Raissa']

for (let contador = 0; contador <= clientes.length - 1; contador++) {
    lista += `<li> ${clientes[contador]} </li>`
}

document.querySelector('#ListaClientes').innerHTML = lista

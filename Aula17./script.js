
//SELETOR POR ID
document.querySelector('#titulo').innerHTML = 'Exemplo para alterar o título'


//SELETOR POR TAG
document.querySelector('a').innerHTML = 'Teste para alterar a tag ancora'


//SELETOR DE MAIS DE UM ITEM POR TAG
let ancoras = document.querySelectorAll('a')
ancoras.forEach(function(elemento){ //função anonima ou callback
    elemento.innerHTML = 'Alterando os elementos'
})


//SELETOR DE MAIS DE UM ITEM POR CLASSE
let boxes = document.querySelectorAll('.box')

boxes.forEach(function(box, index){
     box.innerHTML = 'Alterando para Box ' + (index +1)
})

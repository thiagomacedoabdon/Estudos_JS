let MenuMobile = document.querySelector('.MenuMobile')
let BotaoMenu = document.querySelector('.BotaoMenu')
let aberto = false

function AbrirOuFechar() {
    
    if (aberto === true) {
        aberto = false
        MenuMobile.classList.remove('aberto')
        BotaoMenu.innerText = 'Abrir menu'

    } 
    
    else if (aberto === false) {
        aberto = true
        MenuMobile.classList.add('aberto')
        BotaoMenu.innerText = 'Fechar menu'

    }

}

let botaoTeste = document.querySelector('#botaoTeste')

botaoTeste.addEventListener('click', function(){

    console.log('Mensagem 1')

    botaoTeste.removeEventListener('click', cliqueBotao)
})


// OU PODE SER ASSIM TAMBÉM


function cliqueBotao(){
    console.log('Mensagem 1')
}

botaoTeste.addEventListener('click', cliqueBotao)

let diaSemana = new Date().getDay()
let nomeDiaSemana

switch (diaSemana) {
    case 0:
        nomeDiaSemana = 'domingo.'
        break
    case 1:
        nomeDiaSemana = 'segunda-feira.'
        break
    case 2:
        nomeDiaSemana = 'terça-feira.'
        break
    case 3:
        nomeDiaSemana = 'quarta-feira.'
        break
    case 4:
        nomeDiaSemana = 'quinta-feira.'
        break
    case 5:
        nomeDiaSemana = 'sexta-feira. Dia de tomar cerveja!!!'
        break
    case 6:
        nomeDiaSemana = 'sábado.'
        break
}
document.write(`o dia da semana é ${nomeDiaSemana}`)

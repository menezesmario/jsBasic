//cumprimentos - Date - gethours

let agora = new Date()
let hora = agora.getHours()
let minutos = agora.getMinutes()
let dia = agora.getDate()
let mes = agora.getMonth()

switch(mes) {
    case 0:
        mes = 'janeiro'
        break
    case 1:
        mes = 'fevereiro'
        break
    case 2:
        mes = 'março'
        break
    case 3:
        mes = 'abril'
        break
    case 4:
        mes = 'maio'
        break
    case 5:
        mes = 'junho'
        break
    case 6:
        mes = 'julho'
        break
    case 7:
        mes = 'agosto'
        break
    case 8:
        mes = 'setembro'
        break
    case 9:
        mes = 'outubro'
        break
    case 10:
        mes = 'novembro'
        break
    case 11:
        mes = 'dezembro'
        break

}

console.log(`Agora são exatamente ${hora}:${minutos}h, do dia ${dia} de ${mes}.`) // problemas com o mês. (inicia o mẽs em 0)

if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}

// switch - condição múltipla

let agora2 = new Date()
let diaSem = agora.getDay()

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2: 
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sábado')
    
}




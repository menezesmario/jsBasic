//cumprimentos - Date - gethours

let agora = new Date()
let hora = agora.getHours()
let dia = agora.getDate()
let mes = agora.getMonth()
console.log(`Agora são exatamente ${hora} horas, do dia ${dia} do ${mes + 1}.`) // problemas com o mês. (inicia o mẽs em 0)

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

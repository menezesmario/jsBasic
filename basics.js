//cumprimentos

let agora = new Date()
let hora = agora.getHours()
let dia = agora.getDate()
let mes = agora.getMonth()
console.log(`Agora são exatamente ${hora} horas, do dia ${dia} do ${mes + 1}.`) // problemas com o mês.

if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}
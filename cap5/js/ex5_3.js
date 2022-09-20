const carros = [
    {modelo: 'Volkswagen Gol', preço: 75830},
    {modelo: 'Renault Kwid', preço: 65790},
    {modelo: 'Fiat Argo', preço: 75190},
    {modelo: 'Hyundai HB20', preço: 76690},
    {modelo: 'Citroën C3', preço: 68990},
    {modelo: 'Fiat Mobi', preço: 64690}, 
]

//Filtrar carros por preço
const filtroPorPreco = 68000
let listaDeCarros = ''
let listaDeCarrosFiltrada = ''
for(let i = 0; i < carros.length; i++){
    if(carros[i].preço  <= filtroPorPreco) {
        listaDeCarros += carros[i].modelo+ ' R$ ' + carros[i].preço+ '\n'
    }
}

//Listar todos os carros se valor desejado caso encontrado caso contrário retorna uma lista com o valor informado
if(listaDeCarros.length === 0) {
    for(let i = 0; i < carros.length; i++){
        listaDeCarrosFiltrada += `${carros[i].modelo}  R$ ${carros[i].preço}  \n\n`
    }
} else {
    listaDeCarrosFiltrada += 'Carros com valor até R$ '+ filtroPorPreco+ ' \n------------------ \n\n'+ listaDeCarros
}
console.log(listaDeCarrosFiltrada)


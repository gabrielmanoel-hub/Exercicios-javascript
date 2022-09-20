const carros = [
    {modelo: 'Volkswagen Gol', preço: 75830},
    {modelo: 'Renault Kwid', preço: 65790},
    {modelo: 'Fiat Argo', preço: 75190},
    {modelo: 'Hyundai HB20', preço: 76690},
    {modelo: 'Citroën C3', preço: 68990},
    {modelo: 'Fiat Mobi', preço: 64690}, 
]

//Filtrar carros por preço
const filtroPorPreco = Number(prompt('Até que valor deseja pagar'))
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

// Pesquisar erro git ===> Unable to read current working directory: 
//https://www.google.com/search?q=Unable+to+read+current+working+directory%3A&oq=Unable+to+read+current+working+directory%3A&aqs=chrome..69i57j0i512j0i22i30l8.986j0j7&sourceid=chrome&ie=UTF-8
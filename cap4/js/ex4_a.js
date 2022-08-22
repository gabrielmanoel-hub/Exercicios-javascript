// const fruto = 'Maça'
// const num = 2


// let resposta = ''

// for(let i = 0; i < num; i++) {
//     resposta+= fruto + ' '
// }
// let _resposta = resposta.replaceAll(' ', ' * ')
// console.log(_resposta.slice(0, -2))

/*
inFruta
inNumero
btnRepetirFruta
outFruta
*/

const inNumero = document.getElementById('inNumero')
const inFruta = document.getElementById("inFruta")
const outFruta = document.getElementById('outFruta')
const erroFruta = document.querySelector('.erroFruta')

const btnRepetirFruta = document.querySelector('#btnRepetirFruta')
btnRepetirFruta.addEventListener('click', () => {
    const _inNumero = Number(inNumero.value)
    const _inFruta = inFruta.value
    const validateFruta = _inFruta === '' || isNaN(_inFruta) === false
    const validateNumero = inNumero.value === '' || isNaN(inNumero.value) || _inFruta === 0
    if(validateFruta || validateNumero) {
        console.log('False')
        validateFruta ? erroFruta.textContent = "Informe o nome de uma fruta !" : erroFruta.textContent = 'Informe um número corretamente'
        
    } else {
        erroFruta ? erroFruta.style.display = 'none' : ''
        console.log('True')
    }

    // for(let i = 0; i < num; i++) {
    //     resposta+= fruto + ' '
    // }
    // let _resposta = resposta.replaceAll(' ', ' * ')
    // console.log(_resposta.slice(0, -2))

})
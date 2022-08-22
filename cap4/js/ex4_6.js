
const inNumero = document.getElementById('inNumero')
const outResposta = document.getElementById('outResposta')
const erro = document.getElementById('erro')
let calculo = 0;
const btnVerificarNumPrimo = document.getElementById('btnVerificarNumPrimo')
btnVerificarNumPrimo.addEventListener('click', () => {
    if(Number(inNumero.value) > 0) {
        verificar()
        if(erro.style.display = 'block') {
            erro.style.display = 'none'
        }
        
    } else {
        erro.style.display = 'block'
    }

    if(inNumero.value != Number(inNumero.value) && erro.style.display === 'block') {
        outResposta.textContent = ''
    }    
})
const verificar = () => {
    const _inNumero = Number(inNumero.value)
    if(isNaN(inNumero.value) || inNumero === '' || _inNumero === 0) {
        click++
    }
        for(let i= 1; i <= _inNumero; i++) {
            if(_inNumero % i === 0) {
                calculo++
            } 
        }
    const _calculo = calculo > 2 ? (_inNumero + " Não e primo" ): (_inNumero + " É primo ")
        outResposta.textContent = _calculo
        calculo = 0
}

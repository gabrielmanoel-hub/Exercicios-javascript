const numeroDeSimbolos = document.getElementById("numeroDeSimbolos")
const outResposta = document.getElementById("outResposta") 
let count = 0
const btnPreencherEspaco = document.getElementById("btnPreencherEspaco")
btnPreencherEspaco.addEventListener('click', () => {
    if(isNaN(numeroDeSimbolos.value) || numeroDeSimbolos.value === '' || numeroDeSimbolos.value == 0){
      alert("Informe um número correto !!!!!!!!")
    } else {
        count++
        Res()
    }
    if(count === 2) {
        btnPreencherEspaco.value = 'Preencher Espaço'
        numeroDeSimbolos.value = ''
        outResposta.textContent = ''
        count = 0
    } 
})
const Res = () => {
    const _numeroDeSimbolos = Number(numeroDeSimbolos.value)
    _numeroDeSimbolos === 1 ? outResposta.textContent += '*' : '';
    for(let i = 0; i < _numeroDeSimbolos - 1; i++) {
        if(i === 0){
            outResposta.textContent += '*'
        }
        outResposta.textContent += outResposta.textContent[i] === "*" ? '_' : "*"
    }
    btnPreencherEspaco.value = 'Limpar'
}


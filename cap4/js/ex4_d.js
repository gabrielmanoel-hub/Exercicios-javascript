const btnCriarEstrelas = document.getElementById("btnCriarEstrelas")
btnCriarEstrelas.addEventListener('click', () => {
    let outEstrelas = document.getElementById("outEstrelas")
    const inNumeroDeLinhas = document.getElementById("inNumeroDeLinhas")
    const erro = document.getElementById('erro')
    const num = Number(inNumeroDeLinhas.value)
    const validacao = /[1-9]/g
    outEstrelas.textContent = ''
    inNumeroDeLinhas.value = ''
    if(!validacao.test(num)){
        erro.style.color = "red"
        erro.style.fontSize = '12.3px'
        erro.textContent = "Erro! Apenas número maiores que 0"
    } else {
        let estrela = ''
        for(let i = 1; i <= num; i++) {
            for(let j = 1; j <= i; j++){
               estrela += '*'
            }
            estrela += '\n'
        }
        outEstrelas.textContent = estrela 
    }
})

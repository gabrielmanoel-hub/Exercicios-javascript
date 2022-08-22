const inNumeros = document.getElementById('inNumeros')
const outResposta = document.getElementById('outResposta')

const butDecrescer = document.getElementById('butDecrescer')
butDecrescer.addEventListener('click', ()=>{
    const _inNumeros = Number(inNumeros.value)
    const num = []
    for(let i = 1; i < _inNumeros + 1; i++) {
        num.push(i)
    }
    num.sort((a,b) => b-a)
    const _num = num.toString().replaceAll(',', ', ')
    outResposta.innerHTML = `Entre ${_inNumeros} e 1: ${_num}`
})
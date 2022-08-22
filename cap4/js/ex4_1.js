const inNumero = document.getElementById('inNumero')
let outTabuada = document.getElementById('outTabuada')
const span = document.getElementById('span')
const span2 = document.getElementById('span2')
let count = 0 
const btnMostarTabuada = document.getElementById('btnMostarTabuada')
btnMostarTabuada.addEventListener('click', ()=>{
    
    const validacaoInput = isNaN(Number(inNumero.value)) || (Number(inNumero.value) === 0) 
    if(validacaoInput){
        span.style.display = 'block'
        outTabuada.style.display = "none"
       
    } else {
        span.style.display = "none"
        outTabuada.style.display = "block"
        Resposta()
    }
    count ++
    if(count === 2 && Number(inNumero.value) == inNumero.value) {
        outTabuada.style.display = "none"
        document.location.reload(true)
        count+= -2
    } 
    btnMostarTabuada.innerHTML = "Limpar"
})
const Resposta = () => {
    const _inNumero = Number(inNumero.value)
    for(let i = 1; i <= 10; i++) {
        outTabuada.innerHTML += (`${_inNumero} x ${i} = ${_inNumero*i}\n`).replace('\n', '<br />')
        console.log(`${_inNumero} x ${i} = ${_inNumero*i}`)
    }
}

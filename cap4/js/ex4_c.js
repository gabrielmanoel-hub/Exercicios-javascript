const btnVerificar = document.getElementById('btnVerificar')
btnVerificar.addEventListener('click', ()=>{
    const inNumero = document.getElementById('inNumero')
    const outDivisores = document.getElementById('outDivisores')
    const outNumeroPerfeito = document.getElementById('outNumeroPerfeito')
    const erro = document.getElementById('erro')
    const num = Number(inNumero.value)
    const divisores = []
    let somaDivisores = 0
    for(let i = 0; i < num; i++){
        if(num % i === 0){
            somaDivisores += i
            divisores.push(i)
        }
    }
    erro.textContent = ''
    if(!/[1-9]/g.test(num)){
        erro.style.color = 'red'
        erro.style.display = 'block'
        erro.textContent = 'Informe um número maior que 0' 
    } else {
        outDivisores.textContent = `Divisores de ${num}: ${divisores.toString()} (Soma: ${somaDivisores})`
        const resposta =""+ num ? `${somaDivisores} É um número perfeito` : `${somaDivisores} não é um número perfeito`
        outNumeroPerfeito.textContent = num === somaDivisores ? `${num} É um número perfeito` : `${num} não é um número perfeito`
    }
})

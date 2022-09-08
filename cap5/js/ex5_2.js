const inNumero = document.getElementById('inNumero')
const outErro = document.getElementById('outErro')
const outChances = document.getElementById('outChances')
const outDica = document.getElementById('outDica')
const outNumeroDeErros = document.getElementById('outNumeroDeErros')
const numerosAleatorios = []

inNumero.addEventListener('keyup', ({key})=>{
    if(key === "Enter") {
        validaInput()
    }
})
function apostar() {
    validaInput()
}

const validaInput = () => {
    const NumInNumero = Number(inNumero.value)  
    const _inNumero = inNumero.value
    if(!_inNumero.match(/1-9/g) && (NumInNumero  < 1 || NumInNumero  > 100 ) || /([A-Za-zÁ-ú])/g.test(_inNumero)){
        outErro.style.color = 'red'
        outErro.innerText = 'Apenas numeros entre 1 e 100'
    } else {
        outErro.innerText = ''
        numerosAleatorios.shift()
        numerosAleatorios.push(Math.floor(Math.random() * 2) + 1)
        ErrosEChances()
    } 
}


let countErros = 0
let countChances = 6
outChances.textContent = countChances
outNumeroDeErros.textContent = countErros
const ErrosEChances = () => {
    countChances--
    outChances.textContent = countChances
    if(numerosAleatorios[0] == inNumero.value){
        console.log('ganhou')
    }else {
        countErros++
        outNumeroDeErros.textContent = countErros
        console.log('Perdeu')
    }
    console.log(numerosAleatorios[0])
}



let outNumeroDeErros = document.getElementById('outNumeroDeErros')
const numerosErrados = document.getElementById('numerosErrados')
const outChances = document.getElementById('outChances')

let counErros = 0
outNumeroDeErros.textContent = counErros

let chances = 6
outChances.textContent = chances

let sorteado = Math.floor(Math.random() * 100) + 1;
let numErros = []
let apostas = []
function jogar(){
    const inNumero = document.getElementById('inNumero')
    const _inNumero = Number(inNumero.value)
    const outErro = document.getElementById('outErro')
    
    if(!/[1-9]/g.test(inNumero.value) || _inNumero > 100){
        outErro.style.color = 'red'
        outErro.textContent = "Preencha com um número"
        return
    }
    
    const outDica = document.getElementById('outDica')
    
    if(_inNumero === sorteado) {
        apostar.disabled = true
        alert('Parabens!! Acertou.')
    }

    if(_inNumero !== sorteado) {
        numErros.push(_inNumero)
        const _numErros = [...new Set(numErros)]
        counErros++
        outNumeroDeErros.textContent =`${counErros} ( ${_numErros.join(', ')} )` 

        const menor = 'Tente um número Menor'
        const maior = 'Tente um número Maior'
        outDica.style.fontSize = '14px'
        outDica.style.color = 'red'
        outDica.textContent = _inNumero > sorteado ? menor : maior
    }
    
    chances--
    outChances.textContent = chances
    if(chances < 6){
        // chances = 6
        if(apostas.indexOf(_inNumero) !== -1) {
            alert('Número ' + _inNumero + ' ja existe')
            inNumero.value = ''
        } 
        function fim () {
            apostar.disabled = true
            chances = 6
            setInterval(()=>{
                alert('Fim de partida')
            }, 1000)
            document.location.reload(true)
        }
        chances === 0 ? fim() : ''
        apostas.push(_inNumero)
    }
    outErro.textContent = ''
    inNumero.value = ''
}
const apostar = document.getElementById('apostar')
apostar.addEventListener('click', jogar)
const jogarNovamente = document.getElementById('jogarNovamente')
jogarNovamente.addEventListener('click', () =>{
    document.location.reload(true)
})
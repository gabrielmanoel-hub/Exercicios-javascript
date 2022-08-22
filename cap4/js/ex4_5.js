/*
inConta
inPagar
RegistrarConta
resposta
*/

let countValor = 0;
let countDescricao = 0;
let resposta = '';

const numeroDeContas = document.getElementById('inNumroDeContas');
const outResposta = document.getElementById('resposta');
const valorTotal = document.getElementById('valorTotal')
let inDescricao = document.getElementById('inConta');
let inValor = document.getElementById('inPagar');

const RegistrarConta = document.getElementById('RegistrarConta');
RegistrarConta.addEventListener('click', () => {
    
    const _inDescricao = inDescricao.value;
    const _inValor = Number(inValor.value)

    if(_inDescricao === '' || _inValor === 0 || isNaN(inValor.value)) {
        alert('Informe os dados corretamente...')
        inValor.focus()
        return;
    }

    countValor++
    countDescricao += + _inValor
    resposta += `${_inDescricao} - R$: ${countDescricao.toFixed(2)} \n`
    if(Number(numeroDeContas.value) == countValor) {
        outResposta.textContent = `${resposta}-----------------` 
        valorTotal.textContent = `${countValor} Conta(s) - Total R$: ${countDescricao.toFixed(2)}`
    }
    console.log(resposta,'---------------------')
    console.log(countValor + ` Conta(s) - Total R$: ${countDescricao.toFixed(2)}`)
    inDescricao.value = ''
    inValor.value = ''
})
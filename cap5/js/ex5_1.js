const outAtendimento = document.getElementById('outAtendimento')
const outPacientes = document.getElementById('outPacientes')
const inPaciente = document.getElementById('inPaciente')
const erro = document.getElementById('erro')
const paciente = []
const btnAdicionar = document.getElementById('btnAdicionar') 
btnAdicionar.addEventListener('click', () => {
    const validacao = /^([A-Z]{1}[a-zÁ-ú]+)$|(^([A-Z]{1}[a-zÁ-ú]+)\s([A-Z][a-z]+))$/g
    const _paciente = inPaciente.value
    if(!_paciente.match(validacao)) {
        erro.style.color = 'red'
        erro.innerText = 'Escreva nome e sobrenome ou so primeiro nome EX: Pedro Miguel'
    }else {
        paciente.push(_paciente)
        erro.innerText = ''
        inPaciente.value = ''
    }
    retornaListaDePacientes()
})
const  btnUrgencia = document.getElementById('btnUrgencia')
btnUrgencia.addEventListener('click', () => {
    outAtendimento.textContent = paciente.length === 0 ? "Lista de paciente zerada" : paciente.shift()  
    retornaListaDePacientes()
})
const btnAtender = document.getElementById('btnAtender') 
btnAtender.addEventListener('click', () => {
    outAtendimento.textContent = paciente.length === 0 ? 'Lista de paciente zerada' : paciente.shift()
    retornaListaDePacientes()
}) 
const retornaListaDePacientes = () => {
    let listaDePacientes = ''
    for(let i = 0; i < paciente.length; i++) {
        listaDePacientes += `${i + 1}. ${paciente[i]} \n`
    }
    outPacientes.textContent = listaDePacientes
}
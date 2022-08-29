
const btnPrevisaoDeChinchilas = document.getElementById('btnPrevisaoDeChinchilas')
btnPrevisaoDeChinchilas.addEventListener('click', () => {
    const inChinchilas = document.getElementById('inChinchilas')
    const inAnos = document.getElementById('inAnos')
    const erroChinchilas = document.getElementById('erroChinchilas')
    const erroAnos = document.getElementById('erroAnos')
    const resposta = document.getElementById('resposta')
    const _inChinchilas = Number(inChinchilas.value)
    const _inAnos = Number(inAnos.value)
    const count = [_inChinchilas]
    for(let i = 0; i < _inAnos - 1; i++) {
        count.push(count[i] * 3)
    }
    resposta.textContent = ''
    if(!/[1-9]/g.test(_inChinchilas)) {
        erroChinchilas.style.color = 'red'
        erroChinchilas.textContent = 'Informe um número maior que 0'
        erroChinchilas.style.display = 'block'
    } else if(!/[1-9]/g.test(_inAnos)){
        erroAnos.style.color = 'red'
        erroAnos.textContent = 'Informe um número maior que 0'
        erroAnos.style.display = 'block'
    } else {
        erroAnos.style.display = 'none'
        erroChinchilas.style.display = 'none'
        for(let i = 0; i < count.length; i++) {
            resposta.textContent += `${i + 1} °Ano: ${count[i]} Chinchilas\n` 
        }
    }
})
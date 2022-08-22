let num = []
do{
    let _num = Number(prompt('Número: '));
    num.push(_num)
    if(_num == 0 || isNaN(_num)) {
        alert("Digite um número...")
    }
} while (num[0] == 0)

let pares = `Pares entre 1 e ${num[0]} :`;

if(num[0] > 1) {
    pares += '2';
}

for(let i = 4; i <= num[0]; i += 2){
    pares += `, ${i}`;
}

alert(pares)

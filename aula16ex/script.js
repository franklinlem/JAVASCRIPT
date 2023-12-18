let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if (Number(n) >=1 && Number(n) <=100){
        return true
    } else{
        return false
    }
}

function inLista(n,l){
    if (l.indexOf(Number(n)) !=-1){
        return true
    }else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já adicionado!')
    }
    num.value = ''
    num.focus()
    
}

function finalizar(){
    if (valores.length==0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        for (let pos in valores){
            if (valores[pos]>maior)
                maior = valores[pos]
            if (valores[pos]<menor)
                menor = valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML = `Ao todo temos ${tot} elementos cadastrados.`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    }
}

const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')

function getRandomNumbers(arr, num) {
    let result = []
    let tempArr = [...arr] // Faz uma cópia da lista original

    while(result.length < num && tempArr.length > 0) {
        let randomIndex = Math.floor(Math.random() * tempArr.length)
        result.push(tempArr[randomIndex])
        tempArr.splice(randomIndex, 1) // Remove o número selecionado para evitar repetições
    }

    return result
}

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const dezenas = Number(frm.inDezenas.value)
    const jogos = Number(frm.inJogos.value)

    const lista1 = [10, 53, 5, 37, 34, 38, 33, 4, 32, 30, 27, 17, 11, 56, 54] 
    const lista2 = [58, 47, 18, 9, 40, 12, 48, 7, 31, 3, 15, 22, 55, 21, 26]
    const lista3 = [42, 35, 46, 44, 23, 43, 41, 16, 13, 28, 51, 49, 36, 52, 24,
                    2, 29, 25, 6, 8, 50, 45, 20, 19, 14, 1, 59, 60, 57, 39]

    const dezenasMap = {
        6: [2, 1, 3],
        7: [2, 1, 4],
        8: [2, 1, 5],
        9: [3, 1, 5],
        10: [3, 1, 6]
    }

    let randomNumbersList = []
    if (dezenasMap[dezenas]) {
        const [num1, num2, num3] = dezenasMap[dezenas]
        randomNumbersList.push(...getRandomNumbers(lista1, num1))
        randomNumbersList.push(...getRandomNumbers(lista2, num2))
        randomNumbersList.push(...getRandomNumbers(lista3, num3))
    }

    for (let i = 0; i < jogos; i++) {
        let randomNumbersList = [];
        if (dezenasMap[dezenas]) {
            const [num1, num2, num3] = dezenasMap[dezenas];
            randomNumbersList.push(...getRandomNumbers(lista1, num1));
            randomNumbersList.push(...getRandomNumbers(lista2, num2));
            randomNumbersList.push(...getRandomNumbers(lista3, num3));
        }
        randomNumbersList.sort((a, b) => a - b);   // Ordena os números em ordem crescente
        let resposta = (i+1) + 'º jogo: ' + randomNumbersList.join(' - ');
        resp1.innerText += resposta + '\n';
    }
})

frm.addEventListener('reset', (e) =>{
    e.preventDefault()
    resp1.innerText = ''
    frm.inDezenas.value = ''
    frm.inJogos.value = ''
})
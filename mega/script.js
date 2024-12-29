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

    const lista1 = [10, 53, 33, 34, 5, 37, 42, 23, 44, 32, 35, 38, 30, 41, 11]
    const lista2 = [26, 21, 55, 15, 22, 31, 48, 3, 40, 9, 12, 7, 39, 18, 60]
    const lista3 = [1, 2, 4, 6, 8, 13, 14, 16, 17, 19, 20, 24, 25, 27, 28, 29, 36, 43, 45, 46, 47, 49, 50, 51, 52, 54, 56, 57, 58, 59]

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
        let resposta = randomNumbersList.join(' - ');
        resp1.innerText += resposta + '\n';
    }
})

frm.addEventListener('reset', (e) =>{
    e.preventDefault()
    resp1.innerText = ''
    frm.inDezenas.value = ''
    frm.inJogos.value = ''
})
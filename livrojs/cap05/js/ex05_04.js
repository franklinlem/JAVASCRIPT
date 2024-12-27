alert('Digite 0 para sair!')

do{
    const num = Number(prompt("Número: ")) //le um numero
    if (num == 0 || isNaN(num)){ //se num for 0 ou invalido
        const sair = confirm("Deseja sair?") //solicita confirmação do usuario
        if (sair){
            break //sai da repetição
        } else{
            continue //volta ao inicio do laço
        }
    }
    if (num%2==0){
        alert(`O dobro de ${num} é: ${num*2}`) //se par , mostra o dobro
    } else{
        alert(`O triplo de ${num} é: ${num*3}`) //se impar, mostra o triplo
    }
} while (true) //enquanto verdade(só sai do laço pelo break)
    alert('Bye, bye...')
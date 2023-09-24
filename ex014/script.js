function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = 22
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${min}:${sec}.`
    if (hora >= 0 && hora < 12){
        // Bom dia!
        img.src = 'imagens/manha250.png'
        document.body.style.background = '#feedcc'
    } else if (hora >=12 && hora < 18){
        // Boa tarde!
        img.src = 'imagens/tarde250.png'
        document.body.style.background = '#feba5c'
    } else {
        // Boa noite!
        img.src = 'imagens/noite250.png'
        document.body.style.background = '#0d1518'
    }
}
